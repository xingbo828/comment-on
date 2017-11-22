import React from 'react';
import { bool, string, node } from 'prop-types';
import Icon from '../../Icon';

import { StyledButton } from './Styled';

const Button = ({ children, small, icon, loading, disabled, primary, danger, ...rest }) => {
  return (
    <StyledButton
      small={small}
      primary={primary}
      danger={danger}
      loading={loading}
      disabled={disabled}
      {...rest}
    >
      {children}
      {icon && <Icon
      icon={loading ? 'refresh' : icon}
      size={small ? 'sm' : 'lg'}
      spin={loading}
      />}
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: bool,
  children: node,
  primary: bool,
  danger: bool,
  icon: string,
  loading: bool,
  small: bool
};

export default Button;
