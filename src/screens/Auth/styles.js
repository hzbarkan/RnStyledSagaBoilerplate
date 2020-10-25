import { Button as NBButton, Form as NBForm, Item as NBItem } from 'native-base'
import styled from 'styled-components'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
`

export const Form = styled(NBForm)`
  flex: 1;
  padding-horizontal: 12px;
`

export const Item = styled(NBItem)`
  background-color: transparent;
`

export const LoginButton = styled(NBButton)`
  background-color: ${({ theme, disabled }) => (disabled ? theme.color.disabled : theme.color.black)};
  border-radius: 6px;
  elevation: 5;
  margin-top: 20px;
`
