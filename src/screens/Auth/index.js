import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Input, Text } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { AUTH_ACTION_LOGIN } from '../../redux/actions'
import { Wrapper, Form, Item, LoginButton } from './styles'

const AuthScreeen = (props) => {
  // Redux State and Dispatch Hook
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // State Hook
  const [loginState, setLoginState] = useState({
    username: auth.username,
    password: undefined,
  })

  // Methods and Handlers
  const onLogin = (username, password) => dispatch({ type: AUTH_ACTION_LOGIN, username, password })
  const onChange = (field, value) => {
    setLoginState({ ...loginState, [field]: value })
  }

  const { username, password } = loginState

  // Render
  return (
    <Wrapper>
      <Text bold heading>Welcome</Text>
      <Form style={{ flex: 1 }}>
        <Item>
          <Input
            value={username}
            onChangeText={val => onChange('username', val)}
            placeholder="Username"
          />
        </Item>
        <Item>
          <Input
            secureTextEntry={true}
            value={password}
            onChangeText={val => onChange('password', val)}
            placeholder="Kata sandi"
          />
        </Item>
        <LoginButton disabled={!(username && password)} full onPress={onLogin}>
          <Text white bold>Login</Text>
        </LoginButton>
      </Form>
    </Wrapper>
  )
}

export default AuthScreeen
