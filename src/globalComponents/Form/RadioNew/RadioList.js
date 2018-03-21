import React from 'react'
import Styled from 'styled-components'
import RadioHandler from './RadioHandler'

const Container = Styled.div`
  box-shadow: ${props=>props.theme.boxShadow.large};
  border-radius: 4px;
`

const RadioList = ({ children, value, onChange }) => (
  <Container>
    <RadioHandler value={value} onChange={onChange}>
      {children}
    </RadioHandler>
  </Container>
)

export default RadioList
