import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
  background: ${props=>props.theme.colors.secondaryPale};
  padding: .5rem 1rem;
  border-radius: 4px;
  &:not(:first-of-type) {
    margin-left: 6px;
  }
`

const Tag = ({ title }) => {
  return (
    <Container>
      {title}
    </Container>
  )
}

export default Tag