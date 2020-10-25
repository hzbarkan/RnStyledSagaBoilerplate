
/**
 * Navigation Service
 * Service to provide navigation events anywhere even outside components
 */
import { CommonActions, StackActions } from '@react-navigation/native'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(name, params) {
  return _navigator.dispatch(CommonActions.navigate({ name, params }))
}

function replace(name, params) {
  return _navigator.dispatch(StackActions.replace(name, params))
}

function goBack() {
  return _navigator.dispatch(StackActions.pop())
}

// add other navigation functions that you need and export them

export default {
  navigate,
  replace,
  goBack,
  setTopLevelNavigator,
}
