import React from 'react';
import { bool, node, func } from 'prop-types';
import Spin from '../Spin';
import {
  CardContainer,
  PrimaryCardAction
} from './Styled';

const { SpinContainer } = Spin;

const Card = ({ loading, onClick, children, primaryAction, style }) => {
  return(
    <CardContainer style={style} onClick={onClick}>
      <SpinContainer loading={loading}>
        {children}
        {primaryAction && <PrimaryCardAction>{primaryAction}</PrimaryCardAction>}
      </SpinContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  loading: bool,
  onClick: func,
  children: node
};

Card.defaultProps = {
  loading: false,
  onClick: () => {}
};

export default Card;
