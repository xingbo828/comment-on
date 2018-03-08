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
        <MarketingParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </MarketingParagraph>
      </Summary>

      <Tile>
        <Number>1</Number>
        <Heading>Provide us the details</Heading> 
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph> 
      </Tile>

      <Tile>
        <Number>2</Number>
        <Heading>Provide us the details</Heading> 
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph> 
      </Tile>

      <Tile>
        <Number>3</Number>
        <Heading>Provide us the details</Heading> 
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph> 
      </Tile>



    </Container>
  )
}

export default Tiled