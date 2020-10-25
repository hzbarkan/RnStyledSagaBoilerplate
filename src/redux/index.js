/**
 * Root Store (Redux entrypoint)
 * Initialize store and middlewares here
 */
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { persistCombineReducers, persistStore } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './reducers'
import sagas from './sagas'

// Persist config, including which states are blacklisted to be persisted in storage
const config = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: ['navigation', 'loading'],
}

const middleware = []
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

if (__DEV__) {
  config.timeout = 0
  config.debug = true
  middleware.push(createLogger())
}

const reducers = persistCombineReducers(config, rootReducers)
const enhancers = [applyMiddleware(...middleware)]
const persistConfig = { enhancers }
const store = createStore(reducers, undefined, compose(...enhancers))
const persistor = persistStore(store, persistConfig)

sagaMiddleware.run(sagas)

export { persistor, store }
