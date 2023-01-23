import { AxiosResponse } from 'axios'

export enum Event {
  Unauthorized = 'unauthorized',
}

export interface Request {
  url: string
  method: string
  body?: object
  authorization?: boolean
  override?: { headers?: Record<string, unknown> }
}

export type AnyHandler = () => unknown | Promise<unknown>

export type ResponseHandler = <T>(
  response: AxiosResponse<T>,
) => unknown | Promise<unknown>

export interface Config {
  getClientVersion: () => string
  getAuthorization: () => string | undefined
  getAuthorizationExpired: () => boolean
}

export interface Parsers {
  error: <T>(response: AxiosResponse<T>) => unknown | Promise<unknown>
}

export interface Handlers {
  refresh: () => unknown | Promise<unknown>
}