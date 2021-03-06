import React from 'react';
import { bool, node, func } from 'prop-types';
import Spin from '../Spin';
import {
  CardContainer,
  ChildrenContainer,
  PrimaryCardAction
} from './Styled';

const { SpinContainer } = Spin;

const Card = ({ loading, onClick, children, primaryAction, style }) => {
  return(
    <CardContainer clickable={!!onClick} style={style} onClick={onClick}>
      <SpinContainer loading={loading}>
        <ChildrenContainer loading={loading}>{children}</ChildrenContainer>
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
  loading: false
};

export default Card;
