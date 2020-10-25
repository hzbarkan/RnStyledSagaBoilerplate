/*
 * Root Saga (entrypoint)
 * Run/combine all sagas here
 */
import { spawn } from 'redux-saga/effects'

import { authSaga } from './auth'

export default function* rootSaga() {
  // put sagas here
  yield spawn(authSaga)
}
