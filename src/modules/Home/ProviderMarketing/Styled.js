import Styled from 'styled-components'

export const PlaceholderImage = Styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
`

export const PlaceholderImageReversed = Styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
`