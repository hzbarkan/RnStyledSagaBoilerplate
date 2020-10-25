import styled from 'styled-components'

export const ImageIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${({ size }) => (size ? `${size}px` : '24px')};
  width: ${({ size }) => (size ? `${size}px` : '24px')};
  margin: ${({ margin }) => (margin ? `${margin}px` : '0 8px')};
`

export default ImageIcon
