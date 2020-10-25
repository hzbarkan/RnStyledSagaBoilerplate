import { Text as NBText } from 'native-base'
import styled from 'styled-components'

const applyFontFamily = ({ theme, bold, medium, semi }) => {
  if (bold) return theme.font.bold
  if (medium) return theme.font.medium
  if (semi) return theme.font.semibold

  return theme.font.regular
}

const applyFontSize = ({ small, heading, size }) => {
  if (size) return `${size}px`
  if (heading) return '20px'
  if (small) return '12px'

  return '14px'
}

const applyFontColor = ({ theme, title, disabled, white, primary, color }) => {
  if (color) return theme.color[color]
  if (white) return 'white'

  // return theme.color.text
  return theme.color.black
}

export const Text = styled(NBText)`
  color: ${applyFontColor};
  font-family: ${applyFontFamily};
  font-size: ${applyFontSize};
`

export default Text
