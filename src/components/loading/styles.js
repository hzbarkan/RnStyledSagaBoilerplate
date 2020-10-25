import styled from 'styled-components'

export const Wrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => `${theme.color.black}99`};
  bottom: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  padding: 16px;
  border-radius: 16px;
  background-color: white;
`
