import React from 'react';
import { bool, node } from 'prop-types';
import { StyledButton } from './Styled';

const Button = ({
  children,
  small,
  ghost,
  disabled,
  primary,
  danger,
  ...rest
}) => {
  return (
    <StyledButton
      small={small}
      primary={primary}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: bool,
  children: node,
  primary: bool,
  danger: bool,
  small: bool,
  /**
   * make background transparent and invert text and border colors
   */
  ghost: bool
};

export default Button;
