/**
 * Auth API Service example
 * Examples on how to create API collections on this pattern.
 */

import { LOGIN_URL, LOGOUT_URL, } from '../fixtures/backendUrl'
import { get, post, put, request } from './base'

export const login = (username, password) => post(LOGIN_URL, { username, password })
export const logout = () => post(LOGOUT_URL)
