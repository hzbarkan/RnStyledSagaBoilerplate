import {
  LOADING_ACTION_SET_END,
  LOADING_ACTION_SET_START,
} from '../actions'
import createReducer from '../createReducer'

export const loading = createReducer(false, {
  [LOADING_ACTION_SET_START]: () => true,
  [LOADING_ACTION_SET_END]: () => false,
})