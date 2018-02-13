import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  padding: 6rem 0;
  background-color: ${prop=>prop.theme.colors.offWhite};
`
const PageHero = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default PageHero
