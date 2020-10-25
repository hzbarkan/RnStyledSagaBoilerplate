/**
 * Reducer base
 * Combines all reducers here
 */
import * as auth from './authReducer'
import * as base from './commonReducer'

export default Object.assign(base, auth)
