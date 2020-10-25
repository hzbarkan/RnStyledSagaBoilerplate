/*
 * Auth Saga
 * Will intercept auth actions and do the saga effects using generator functions for auth tasks and manipulate the reducer using 'put' effect
 * Further reading: https://redux-saga.js.org/docs/api/
 */
import { delay, put, takeLatest } from 'redux-saga/effects'
import {
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGOUT,
  AUTH_ACTION_SET_ERROR,
  AUTH_ACTION_SET_PROFILE,
  AUTH_ACTION_SET_TOKEN,
  LOADING_ACTION_SET_END,
  LOADING_ACTION_SET_START,
} from '../actions'

function* login(action) {
  const { username, password } = action
  yield put({ type: LOADING_ACTION_SET_START })

  // BELOW: mock login
  const mockUser = {
    token: '123xxxx',
    refreshToken: '123xxxx',
    profile: {
      username: 'johndoe',
      fullname: 'John Doe',
      picture: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    },
  }
  yield put({ type: AUTH_ACTION_SET_TOKEN, token: mockUser.token, refreshToken: mockUser.refreshToken })
  yield put({ type: AUTH_ACTION_SET_PROFILE, data: mockUser.profile })

  yield delay(1000)

  // BELOW: mock error
  if (password === 'error') {
    yield put({ type: AUTH_ACTION_SET_ERROR, error: 'oops! Password anda salah' })
  }

  // TODO: real login and error logic

  yield put({ type: LOADING_ACTION_SET_END })
}

function* logout() {
  // TODO: logout function
}

export function* authSaga() {
  yield takeLatest(AUTH_ACTION_LOGIN, login)
  yield takeLatest(AUTH_ACTION_LOGOUT, logout)
}
