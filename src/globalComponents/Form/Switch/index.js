import React, { Component } from 'react';
import { bool, func, oneOf, shape, string, object } from 'prop-types';
import { Label } from '../Label';
import {
  SwitchContainer,
  SwitchWrapper,
  InputContainer,
  InputErrorMsg
} from './Styled';

class Switch extends Component {
  handleToggle = e => {
    this.props.input.onChange(!this.props.input.checked);
  };

  setChecked = v => {
    this.props.input.onChange(v);
  };

  handleKeyDown = e => {
    if (e.keyCode === 37) {
      // Left
      this.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      this.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) {
      // Space, Enter
      this.handleToggle(e);
    }
  };

  render() {
    const {
      size,
      label,
      input: { checked },
      meta: { touched, error }
    } = this.props;
    return (
      <InputContainer>
        <Label focused={false} filled>
          {label}
        </Label>
        <SwitchWrapper>
          <SwitchContainer
            onKeyDown={this.handleKeyDown}
            onClick={this.handleToggle}
            checked={checked}
            size={size}
            tabIndex="0"
          />
        </SwitchWrapper>
        {touched &&
        ((error &&
          <InputErrorMsg>
            {error}
          </InputErrorMsg>))}
      </InputContainer>
    );
  }
}

Switch.propTypes = {
  /** State of the switch */
  /** Callback function of switch toggle */
  lable: string,
  meta: object,
  input: shape({
    onChange: func,
    checked: bool,
  }),
  /** Size of the swtich 'small' or 'default' */
  size: oneOf(['small', 'default'])
};

Switch.defaultProps = {
  size: 'default',
  label: '',
  meta: {},
};

export default Switch;
