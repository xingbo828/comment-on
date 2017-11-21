import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  Label
} from './Styled';

class ItemsCount extends Component {
  render() {
    const { label } = this.props;
    return (
      <StyledContainer>
        <Label>
          {label}
        </Label>
      </StyledContainer>
    );
  }
}

ItemsCount.propTypes = {

};

export default ItemsCount;
