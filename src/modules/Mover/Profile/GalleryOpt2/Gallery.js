import React from 'react'
import Styled from 'styled-components'

const Image = Styled.div`
  width: calc(33.3% - .5rem);
  padding-bottom: 25%;
  background-size: cover;
  background-position: center center;
  background-image: ${props=>props.src && `url(${props.src})`};
`

const ImageOne = Styled(Image)`

`

const ImageTwo = Styled(Image)`

`

const ImageThree = Styled(Image)`

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
  padding: 1rem 1rem 0;
  justify-content: space-between;
  display: flex;
  position: relative;
  width: 100%;

  ${props=>props.theme.media.greaterThan('sm')`

  `}
`

const Gallery = ({ images }) => (
  <Container>
    {/* <ImageOne src={images[0]} />
    <ImageTwo src={images[1]} />
    <ImageThree src={images[2]} /> */}
  </Container>
)

export default Gallery