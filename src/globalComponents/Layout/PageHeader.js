import React from 'react'
import Styled from 'styled-components'

const Container = Styled.header`
  padding: 4rem 0 1rem;
  background-color: ${props=>props.theme.colors.offWhite};

  ${props=>props.theme.media.greaterThan('md')`
    padding: 6rem 0 2rem;
  `}

  ${props=>props.centered && `
    text-align: center;
  `}
`
const PageHeader = ({ centered, children }) => {
  return (
    <Container centered={centered}>
      {children}
    </Container>
  )
}

export default PageHeader
