import React from 'react'
import { Text } from '../Text'
import styled from 'styled-components'

const Wrapper = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  flex: 1;
  justify-content: center;
`

const Splash = () => {
  return (
    <Wrapper>
      <Text size={16}>Welcome</Text>
    </Wrapper>
  )
}

export default Splash
