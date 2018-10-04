import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  PrimaryWrapper,
  SecondaryWrapper
} from './Styled'

class RiverFlowPanel extends React.Component {


  render() {
    const { primaryContent, secondaryContent, flipped } = this.props
    return (
      <Container flipped={flipped}>
        <SecondaryWrapper>{secondaryContent}</SecondaryWrapper>
        <PrimaryWrapper>{primaryContent}</PrimaryWrapper>
      </Container>
    )
  }
}

RiverFlowPanel.propTypes = {
  primaryContent: PropTypes.element.isRequired,
  secondaryContent: PropTypes.element.isRequired 
}

export default RiverFlowPanel