import React from 'react'
import Styled from 'styled-components'

const Image = Styled.div`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-image: ${props=>props.src && `url(${props.src})`};
`

const ImageOne = Styled(Image)`

  background-color: #FFADAD;

  ${props=>props.theme.media.greaterThan('sm')`
    left: 0;
    top: 0;
    bottom: 0;
    width: 53.5%;
    padding-bottom: 30% 60%;
  `}
`

const ImageTwo = Styled(Image)`


  background-color: #FFADAD;

  ${props=>props.theme.media.greaterThan('sm')`
    left: 55%;
    top: 0;
    width: 14.25%;
    padding-bottom: 14.25%;
    padding-bottom: 30% 60%;
  `}
`

const ImageThree = Styled(Image)`

  background-color: #FFADAD;

  ${props=>props.theme.media.greaterThan('sm')`
    left: 55%; 
    bottom: 0;
    width: 14.25%;
    padding-bottom: 14.25%;
    padding-bottom: 30% 60%;
  `}
`
const ImageFour = Styled(Image)`
  display: none;
  background-color: #FFADAD;

  ${props=>props.theme.media.greaterThan('sm')`
    display: block;
    right: 0;
    top: 0;
    width: 29.25%;
    bottom: 0;
    padding-bottom: 30% 60%;
  `}
`

const Container = Styled.div`
  position: relative;
  padding-bottom: 50%;
  width: 100%;

  ${props=>props.theme.media.greaterThan('sm')`
    padding-bottom: calc(30% + 1rem);
    width: calc(100% + 3rem);
    margin-left: -24px;
    margin-right: -24px;
  `}
`

const Gallery = ({ images }) => (
  <Container>
    <ImageOne src={images[0]} />
    <ImageTwo src={images[1]} />
    <ImageThree src={images[2]} />
    <ImageFour src={images[3]} />
  </Container>
)

export default Gallery