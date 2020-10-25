/**
 * Navigation Entry
 * The "router" part of this app
 */
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Auth, Home } from '../screens'
import NavigationService from './NavigationService'

const Stack = createStackNavigator()

class AppNavigator extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      token: PropTypes.string,
      profile: PropTypes.object,
    }).isRequired,
  }

  AuthScreens() {
    return (
      <>
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
      </>
    )
  }

  // Protected screens that cannot be accessed before login
  ProtectedScreens() {
    return (
      <>
        <Stack.Screen name="Home" component={Home} />
      </>
    )
  }

  render() {
    return (
      <NavigationContainer ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}>
        <Stack.Navigator>
          {this.props.auth.profile ? this.ProtectedScreens() : this.AuthScreens()}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })
export default connect(mapStateToProps, null)(AppNavigator)