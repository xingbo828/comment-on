import React from 'react'
import Styled from 'styled-components'
import NumberField from '../NumberField'

const Container = Styled.div`
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 2rem;
  box-shadow: ${props=>props.theme.boxShadow.large};
  border-radius: 4px;

  ${props=>props.theme.media.greaterThan('sm')`
    width: 47.25%;
  `}
`
const Title = Styled.div`
  padding: 0 0 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5;
`

const Image = Styled.div`
  margin: 0 auto 1.5rem;
  width: 100%;
  height: 100px;
  background: url('${props=>props.src}') center center no-repeat;
  background-size: contain;
`

class ItemQuantity extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    console.log(this.props)
    this.props.onChange(this.props.title, value)
  }

  render() {

    const { image, title, min, max, value, unit } = this.props

    return (
      <Container>
        <Image src={image} />
        <Title>{title}</Title>
        <NumberField onChange={this.handleChange} unit={unit} min={min} max={max} value={value}/>
      </Container>
    )
  }
}

export default ItemQuantity
