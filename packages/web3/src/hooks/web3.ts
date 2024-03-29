import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useWeb3Modal } from '@web3modal/react'
import { useCallback, useContext, useEffect, useMemo } from 'react'
import { Web3Connectors } from '../connectors'
import { Web3ConnectorsContext } from '../providers'

const ethEventChainIDChanged = 'chainIdChanged'
const ethEventChainChanged = 'chainChanged'
const ethEventAccountsChange = 'accountsChanged'

export const useInactiveListener = (
  connectors: Web3Connectors | null,
  onChangeChain?: () => void,
  onChangeAccount?: () => void,
) => {
  const { error, activate } = useWeb3React()

  const handleReActivate = useCallback(
    (message: string, first: () => void) => {
      first()
      if (!connectors) return
      activate(connectors.injected, undefined, true).catch((err) => {
        console.error(message, err)
      })
    },
    [activate, connectors],
  )

  const _onChangeChain = useCallback(() => {
    handleReActivate(
      'failed to re-activate after network changed',
      () => onChangeChain && onChangeChain,
    )
  }, [handleReActivate, onChangeChain])

  const _onChangeAccount = useCallback(
    (accounts: string[]) => {
      accounts.length > 0 &&
        handleReActivate(
          'failed to re-active after account changed',
          () => onChangeAccount && onChangeAccount(),
        )
    },
    [handleReActivate, onChangeAccount],
  )

  useEffect(() => {
    // @ts-ignore
    const { ethereum } = window

    if (ethereum && ethereum.on && !error) {
      ethereum.on(ethEventChainIDChanged, _onChangeChain)
      ethereum.on(ethEventChainChanged, _onChangeChain)
      ethereum.on(ethEventAccountsChange, _onChangeAccount)

      return () => {
        if (!ethereum || !ethereum.removeListener) return
        ethereum.removeListener(ethEventChainIDChanged, _onChangeChain)
        ethereum.removeListener(ethEventChainChanged, _onChangeChain)
        ethereum.removeListener(ethEventAccountsChange, _onChangeAccount)
      }
    }
  }, [error, handleReActivate, _onChangeAccount, _onChangeChain])
}

export const useLibrary = () => {
  const { library } = useWeb3React<Web3Provider>()
  return library
}

export const useSigner = () => {
  const library = useLibrary()
  const signer = useMemo(
    () => (library ? library.getSigner() : undefined),
    [library],
  )
  return signer
}

export const useEthAddress = () => {
  const { account } = useWeb3React<Web3Provider>()
  return account
}

export const useChainID = () => {
  const { chainId } = useWeb3React<Web3Provider>()
  return chainId
}

export const useWeb3Conntectors = () => useContext(Web3ConnectorsContext)

export { useWeb3Modal }
