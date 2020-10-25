/**
 * Custom Axios HTTP Instance
 * Includes interceptor for Refresh Token and Auth Token
 * Includes error catching and response formatting
 */

import axios from 'axios'
import { Toast } from 'native-base'
import env from 'react-native-config'

import { LOGIN_URL, REFRESH_TOKEN_URL } from '../../fixtures/api'
import { store } from '../../redux'
import { AUTH_ACTION_EXPIRED, AUTH_ACTION_SET_TOKEN } from '../../redux/actions'

const baseURL = env.BACKEND_URL
const httpInstance = axios.create({ timeout: 10000, baseURL })

const handleResponse = (res) => {
  if (__DEV__) {
    console.log(res, 'httpInstance:handleResponse')
  }

  if (!res) return { ok: false }

  const { data, status } = res
  const ok = status && status >= 200 && status < 300

  return { ok, status, data }
}

const isTokenExpired = (res) => res?.status === 401
const isServerFault = (res) => res?.status >= 500 && res?.status < 600

const reLoginAndRetry = (req) => {
  const {
    auth: { username, password },
  } = store.getState()

  return axios
    .post(`${baseURL}${LOGIN_URL}`, { username, password })
    .then((res) => {
      const { token, refreshToken } = res.data
      store.dispatch({ type: AUTH_ACTION_SET_TOKEN, token, refreshToken })
      req.headers.authorization = `Bearer ${token}`
      return httpInstance.request(req)
    })
    .catch((error) => {
      const { response } = error

      if (!isServerFault(response)) {
        store.dispatch({ type: AUTH_ACTION_EXPIRED })
      }

      return handleResponse(error?.response)
    })
}

const refreshTokenAndRetry = (req, refreshToken) => {
  return axios
    .post(`${baseURL}${REFRESH_TOKEN_URL}`, { token: refreshToken })
    .then((res) => {
      const token = res.data.token
      store.dispatch({ type: AUTH_ACTION_SET_TOKEN, token, refreshToken: refreshToken })
      req.headers.authorization = `Bearer ${token}`
      return httpInstance.request(req)
    })
    .catch((error) => {
      const { response } = error

      if (isTokenExpired(response)) {
        return reLoginAndRetry(req)
      } else if (!isServerFault(response)) {
        store.dispatch({ type: AUTH_ACTION_EXPIRED })
      }

      return handleResponse(error?.response)
    })
}

httpInstance.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => {
    const { response, config, message } = error

    if (__DEV__) {
      console.log(response, config, message, error, 'httpInstance:AxiosResponseErrorInterceptor')
    }

    if (isTokenExpired(error.response) && !config._retry) {
      const { auth } = store.getState()
      config._retry = true

      if (auth.refreshToken) {
        return refreshTokenAndRetry(config, auth.refreshToken)
      } else {
        return reLoginAndRetry(config)
      }
    }

    // TODO: HANDLE ERROR WITH UNDEFINED RESPONSE ( CLIENT ERROR MESSAGE )
    if (message) Toast.show({ text: message, type: 'danger' })

    return handleResponse(response)
  },
)

export default httpInstance
