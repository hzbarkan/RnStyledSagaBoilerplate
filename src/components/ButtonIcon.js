import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Image as ImageNative } from 'react-native'
import styled from 'styled-components'

import { ImageIcon } from './ImageIcon'

const Button = styled.TouchableOpacity`
  align-content: center;
  justify-content: center;
`

export class ButtonIcon extends Component {
  render() {
    const { onPress, source, size, style } = this.props

    return (
      <Button onPress={onPress} style={style}>
        <ImageIcon source={source} size={size} />
      </Button>
    )
  }
}

ButtonIcon.propTypes = {
  onPress: PropTypes.func,
  size: PropTypes.number,
  style: PropTypes.object,
  source: ImageNative.propTypes.source.isRequired,
}

export default ButtonIcon
