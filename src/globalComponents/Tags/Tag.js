import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
  background: ${props=>props.theme.colors.secondaryPale};
  white-space: nowrap;
  padding: .5rem 1rem;
  margin: 0 0 6px;
  border-radius: 4px;
  &:not(:last-of-type) {
    margin-right: 6px;
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