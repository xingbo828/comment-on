import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  padding: 2rem;
  background: ${props=>props.theme.colors.secondaryLight};
  width: 80%;
  border-radius: 4px;
  color: white;
  box-shadow: ${props=>props.theme.boxShadow.large};

  ${props=>props.theme.media.greaterThan('sm')`
    width: 58.3333%;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    padding: 5rem;
  `}

  &:nth-of-type(3n) {
    background: ${props=>props.theme.colors.primary};
    color: white;
    transform: translateY(-1.25rem);
    margin-left: auto;

    ${props=>props.theme.media.greaterThan('sm')`
      width: 58.3333%;
    `}

    ${props=>props.theme.media.greaterThan('md')`
      transform: translateY(-2.5rem);
      margin-left: 0;
    `}
  }

  &:nth-of-type(4n) {
    background: white;
    transform: translateY(-2.5rem);
    color: inherit;

    ${props=>props.theme.media.greaterThan('md')`
      margin-left: auto;
      transform: translateY(-5rem);
    `}
  } 
`

const Tile = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Tile