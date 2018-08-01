import Styled from 'styled-components'

export const PlaceholderImage = Styled.div`
  position: absolute;
  top: -5%;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;

  ${props=>props.theme.media.greaterThan('sm')`
    top: -5%;
    bottom: -5%;
  `}
`

export const PlaceholderImageReversed = Styled.div`
  position: absolute;
  top: -5%;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
  transform: scaleX(-1);

  ${props=>props.theme.media.greaterThan('sm')`
    top: -5%;
    bottom: -5%;
  `}
`