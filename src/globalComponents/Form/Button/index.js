import React from 'react';
import { bool, node } from 'prop-types';
import Icon from '../../Icon';
import { StyledButton } from './Styled';

const Button = ({
  children,
  small,
  ghost,
  disabled,
  primary,
  danger,
  success,
  outline,
  fullWidth,
  ...rest
}) => {
  const getIconPosition = (children) => {
    if(children.length !== 2){
      return 'noIcon';
    }
    const position = children.findIndex(c => c.type && c.type.name === Icon.name);
    if(position === 0){
      return 'iconLeft';
    }
    return 'iconRight';
  };

  return (
    <StyledButton
      iconPosition={getIconPosition(children)}
      small={small}
      primary={primary}
      danger={danger}
      success={success}
      disabled={disabled}
      ghost={ghost}
      outline={outline}
      fullWidth={fullWidth}
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
  success: bool,
  small: bool,
  outline: bool,
  /**
   * make background transparent and invert text and border colors
   */
  ghost: bool
};

export default Button;
