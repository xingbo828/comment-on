import React from 'react'
import Styled from 'styled-components'
import Box from '../../../../globalComponents/Box'
import Grid from '../../../../globalComponents/Grid';


const Container = Styled.div`
  display: flex; 
  flex-wrap: wrap;
`
const Tile = Styled.div`
  background: white;
  width: 100%;

  &:nth-of-type(even) {
    background: linear-gradient(45deg, #ffbf37 1%,#ffa500 99%);
  }

  &:nth-of-type(odd) {
    background: linear-gradient(45deg, #1f5ffc 0%,#39a9ff 98%);
  }
`

const Heading = Styled.h3`
  margin-top: -.95rem;
  margin-left: 1.65rem;
  line-height: 1.25;
  font-size: 1.5rem;
  position: relative;
  color: white;

  &:after {
    height: 4px;
    position: absolute;
    background: ${props=>props.underlineColor};
    width: 30%;
    bottom: -1rem;
    left: 0;
    content: '';
    display: block;
  }

  ${props=>props.theme.media.greaterThan('md')`
    font-size: 3rem;
    margin-top: -3rem;
    margin-left: 4rem;
  `}
`

const Number = Styled.div`
  content: '1';
  color: white;
  font-size: 6rem;
  line-height: 4.15rem;
  font-weight: 800;
  opacity: .2;

  ${props=>props.theme.media.greaterThan('md')`
    font-size: 14rem;
    line-height: 9.7rem;
  `}
`

const Image = Styled.div`
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
  height: 200px;
  width: 100%;

  ${props=>props.theme.media.greaterThan('md')`
    height: 400px;
  `}
`

const Paragraph = Styled.p`
  margin: 2rem 0 0 1.65rem;
  line-height: 1.5;
  color: white;
  font-size: 1rem;
  font-weight: 600;

  ${props=>props.theme.media.greaterThan('md')`
    margin-left: 4rem;
    font-size: 1.125rem;
  `}
`

const Tiled = ({ children }) => {
  return (
    <Container>
      <Tile>
        <Grid.Container>
          <Grid.Row middle="md">
            <Grid.Col lg={12} md={12}>
              <Box vertical={10}>
                <div>
                  <Number>1</Number>
                  <Heading underlineColor="#ffa500" >Tell us about your move</Heading> 
                  <Paragraph>We give you all the tools you need to quickly determine the size and scope of your move.</Paragraph>
                </div>
              </Box>
            </Grid.Col>
            <Grid.Col lg={12} md={12}>
              <Box vertical={{ md: 10, sm:0 }} below={10}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FItems.png?alt=media&token=f17d90ea-4257-4adf-a42b-d2ea6b64ddeb" />
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Tile>
      <Tile>
        <Grid.Container>
          <Grid.Row middle="md">
            <Grid.Col lg={12} md={12}>
              <Box vertical={10}>
                <div>
                  <Number>2</Number>
                  <Heading underlineColor="white">Get free estimates</Heading> 
                  <Paragraph>We'll provide you with the estimated moving costs from a variety of Movers.</Paragraph>
                </div>
              </Box>
            </Grid.Col>
            <Grid.Col lg={12} md={12} first="md">
              <Box vertical={{ md: 10, sm:0 }} below={10}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FEstimates.png?alt=media&token=aad0ad8d-44c6-489a-b3bf-8ef7381923b5" />
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Tile>
      <Tile>
        <Grid.Container>
          <Grid.Row middle="md">
            <Grid.Col lg={12} md={12}>
              <Box vertical={10}>
                <div>
                  <Number>3</Number>
                  <Heading underlineColor="#ffa500">Choose your mover</Heading> 
                  <Paragraph>Once you're happy with your choice, we'll put you in touch. Easy as that!</Paragraph>
                </div>
              </Box>
            </Grid.Col>
            <Grid.Col lg={12} md={12}>
              <Box vertical={{ md: 10, sm:0 }} below={10}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FTrucks.png?alt=media&token=8931390d-b16c-4e90-b84c-4e01fafd18d7" />
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Tile>
    </Container>
  )
}

export default Tiled