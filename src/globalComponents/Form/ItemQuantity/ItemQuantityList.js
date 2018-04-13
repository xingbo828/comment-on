import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    margin: 0 0 2rem;
  }
`

class ItemQuantityList extends React.Component {

  render() {
    const { children } = this.props
    return (
      <Container>
        { children }
      </Container>
    )
  }
}

export default ItemQuantityList
