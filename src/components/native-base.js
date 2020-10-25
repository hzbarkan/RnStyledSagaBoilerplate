import { Container as NBContainer, Input as NBInput, Label as NBLabel } from 'native-base'
import styled from 'styled-components'

export const Input = styled(NBInput).attrs({
  autoCapitalize: 'none',
})`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 12px;
`

export const Label = styled(NBLabel)`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;
`

export const Container = styled(NBContainer)`
  background-color: ${({ theme }) => theme.color.accent};
  flex: 1;
`
