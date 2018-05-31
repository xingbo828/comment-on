import React from 'react'
import {
  Container,
  DollarValue,
  CentsValue,
  Sufix,
  InnerContainer,
  DollarSign
} from './Styled'


const Pricing = ({ price, sufix, inverted }) => {

  const getDollars = (price) => {
    return Math.trunc(price)
  }

  const getCents = (price) => {
    return (price % 1).toFixed(2) * 100
  }
  
  return (
    <Container inverted={inverted} >
      <DollarValue><DollarSign>$</DollarSign>{getDollars(price)}</DollarValue>
      <InnerContainer>
        <CentsValue>{getCents(price)}</CentsValue>
        <Sufix>{sufix}</Sufix>
      </InnerContainer>
    </Container>
  )
}

export default Pricing