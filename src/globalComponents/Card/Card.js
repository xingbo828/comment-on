import React from 'react';
import { bool } from 'prop-types';
import Spin from '../Spin';
import {
  CardContainer,
  PrimaryCardAction
} from './Styled';

const { SpinContainer } = Spin;

const Card = ({ loading, children, primaryAction, style }) => {
  return(
    <CardContainer style={style}>
      <SpinContainer loading={loading}>
        {children}
        {primaryAction && <PrimaryCardAction>{primaryAction}</PrimaryCardAction>}
      </SpinContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  loading: bool
};

Card.defaultProps = {
  loading: false
};

export default Card;
