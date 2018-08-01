import React from 'react'
import PropTypes from 'prop-types'
import {
  Container
} from './Styled'


class RiverFlowContainer extends React.Component {

  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}

RiverFlowContainer.propTypes = {
  children: PropTypes.any.isRequired
}

export default RiverFlowContainer