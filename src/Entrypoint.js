/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import { Root } from 'native-base'
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ThemeProvider } from 'styled-components'

import theme from './fixtures/theme'
import Loading from './components/loading'
import Splash from './components/splash'
import Navigator from './navigation'
import { persistor, store } from './redux'

export default class Entrypoint extends Component {
  render() {
    return (
      <Root>
        <StatusBar />
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={<Splash />} persistor={persistor}>
              <Navigator />
              <Loading />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </Root>
    )
  }
}
