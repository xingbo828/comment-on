import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import {
  RateContainer,
  RateIconList,
  RateIcon
} from './Styled';

class Rate extends Component {
  render() {
    return (
      <RateContainer>
        <RateIconList>
          <RateIcon>
            <Icon icon="star" />
          </RateIcon>
          <RateIcon>
            <Icon icon="star" />
          </RateIcon>
          <RateIcon>
            <Icon icon="star" />
          </RateIcon>
          <RateIcon>
            <Icon icon="star" />
          </RateIcon>
          <RateIcon>
            <Icon icon="star" />
          </RateIcon>
        </RateIconList>
      </RateContainer>
    );
  }
}

Rate.propTypes = {

};

export default Rate;
