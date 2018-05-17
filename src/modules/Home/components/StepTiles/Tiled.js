import React from 'react'
import Styled from 'styled-components'
import Tile from './Tile'
import { 
  Heading as MarketingHeading, 
  Eyebrow, 
  Paragraph as MarketingParagraph 
} from '../../../../globalComponents/MarketingTypography';


const Container = Styled.div`
  display: flex; 
  flex-wrap: wrap;
`

const Summary = Styled.div`
  width: 100%;
  padding: 5em;
  text-align: center;

  ${props=>props.theme.media.greaterThan('md')`
    width: 41.666%;
  `}

`

const Heading = Styled.h3`
  margin-top: -.95rem;
  margin-left: 1.65rem;
  line-height: 1.25;
  font-size: 1rem;
  position: relative;

  &:after {
    height: 3px;
    position: absolute;
    background: white;
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
  color: ${props=>props.theme.colors.primaryLight};

  ${props=>props.theme.media.greaterThan('md')`
    font-size: 14rem;
    line-height: 9.7rem;
  `}
`

const Paragraph = Styled.p`
  margin: 2rem 0 0 1.65rem;
  line-height: 1.5;

  ${props=>props.theme.media.greaterThan('md')`
    margin-left: 4rem;
  `}
`

const Tiled = ({ children }) => {
  return (
    <Container>
      <Summary>
        <Eyebrow wrapperTag="h4" size="md">It's Easy!</Eyebrow>
        <MarketingHeading wrapperTag="h3" size="md">Here's how it works</MarketingHeading>
        <MarketingParagraph>Here's how we help you find a mover that best fits your moving needs.</MarketingParagraph>
      </Summary>

      <Tile>
        <Number>1</Number>
        <Heading>Tell us about your move</Heading> 
        <Paragraph>We give you all the tools you need to quickly determine the size and scope of your move.</Paragraph> 
      </Tile>

      <Tile>
        <Number>2</Number>
        <Heading>Get free estimates</Heading> 
        <Paragraph>We'll provide you with the estimated moving costs from a variety of Movers.</Paragraph> 
      </Tile>

      <Tile>
        <Number>3</Number>
        <Heading>Choose your mover</Heading> 
        <Paragraph>Once you're happy with your choice, we'll put you in touch. Easy as that!</Paragraph> 
      </Tile>



    </Container>
  )
}

export default Tiled