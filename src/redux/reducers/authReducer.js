import {
  AUTH_ACTION_EXPIRED,
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGOUT,
  AUTH_ACTION_SET_ERROR,
  AUTH_ACTION_SET_PROFILE,
  AUTH_ACTION_SET_TOKEN,
} from '../actions'
import createReducer from '../createReducer'

const initialState = {
  username: undefined,
  password: undefined,
  token: undefined,
  refreshToken: undefined,
  profile: undefined,
  error: undefined,
}

const login = (state, action) => ({ username: action.username, password: action.password })
const logout = (state) => ({ ...initialState })
const expired = (state) => ({ ...state, token: undefined, refreshToken: undefined })

const setToken = (state, { token, refreshToken }) => ({ ...state, token, refreshToken, error: undefined })
const setProfile = (state, { data }) => ({ ...state, profile: data, error: undefined })
const setError = (state, { error }) => ({ ...state, error })

export const auth = createReducer(initialState, {
  [AUTH_ACTION_LOGIN]: login,
  [AUTH_ACTION_LOGOUT]: logout,
  [AUTH_ACTION_EXPIRED]: expired,
  [AUTH_ACTION_SET_TOKEN]: setToken,
  [AUTH_ACTION_SET_PROFILE]: setProfile,
  [AUTH_ACTION_SET_ERROR]: setError,
})
