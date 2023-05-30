import { user as userAPI } from '@tryrolljs/api'
import { types } from '@tryrolljs/api-client'
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useRef,
} from 'react'
import {
  SessionContextValue,
  SessionProviderProps,
  SessionStatus,
} from './types'

export const SessionContext = createContext<SessionContextValue>({
  logIn: Promise.resolve,
  logOut: Promise.resolve,
  refresh: Promise.resolve,
  status: 'initializing',
})

const OAUTH_CODE_URL_PARAM_KEY = 'code'

const SessionProvider = ({
  apiClient,
  authSdk,
  getMe = userAPI.getMe,
  children,
}: SessionProviderProps) => {
  const isMountedRef = useRef(false)
  const [status, setStatus] = useState<SessionStatus>('initializing')
  const [user, setUser] = useState<userAPI.types.GetMeResponseData>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const unauthorizedListener = () => authSdk.clear()
    apiClient.on(types.Event.Unauthorized, unauthorizedListener)

    return () => {
      apiClient.off(types.Event.Unauthorized, unauthorizedListener)
    }
  }, [apiClient, authSdk])

  useEffect(() => {
    if (isMountedRef.current) {
      return
    }

    const loadUserData = async () => {
      try {
        const user_ = await getMe(apiClient)
        setUser(user_.data)
      } catch (e) {
        setError(e)
      }
    }

    const getOauthCode = () => {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.get(OAUTH_CODE_URL_PARAM_KEY)
    }

    const initializeNewSession = async () => {
      try {
        const oauthCode = getOauthCode()
        if (oauthCode) {
          await authSdk.exchangeCodeForToken(oauthCode)
          await loadUserData()
        }
      } catch (e) {
        setError(e)
        setUser(undefined)
      }
    }

    const initialize = async () => {
      try {
        setStatus('initializing')
        await authSdk.restoreTokenFromCache()
        if (authSdk.getAccessToken()) {
          await loadUserData()
        } else {
          await initializeNewSession()
        }
      } catch (e) {
        await initializeNewSession()
      } finally {
        setStatus('stale')
      }
    }

    initialize()
    isMountedRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refresh = useCallback(async () => {
    try {
      setStatus('refreshing')
      await authSdk.refreshTokens(true)
    } catch (e) {
    } finally {
      setStatus('stale')
    }
  }, [authSdk])

  const logIn = useCallback(async () => {
    const [url] = await authSdk.getLogInUrl()
    window.location.href = url
  }, [authSdk])

  const logOut = useCallback(async () => {
    window.location.href = await authSdk.getLogOutUrl()
  }, [authSdk])

  return (
    <SessionContext.Provider
      value={{ status, user, logIn, logOut, refresh, error }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)

export default SessionProvider
