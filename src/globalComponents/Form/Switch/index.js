import React, { Component } from 'react';
import { bool, func, oneOf } from 'prop-types';
import {
  SwitchContainer
} from './Styled';

class Switch extends Component {

  state = {
    checked: this.props.checked
  };

  setChecked = (checked) => {
    this.setState({
      checked
    });
    this.props.onChange(checked);
  };

  handleToggle = (e) => {
    const checked = !this.state.checked;
    this.setChecked(checked);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 37) { // Left
      this.setChecked(false);
    } else if (e.keyCode === 39) { // Right
      this.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) { // Space, Enter
      this.handleToggle(e);
    }
  }

  render() {
    const { checked } = this.state;
    const { size } = this.props;
    return (
      <SwitchContainer
        onKeyDown={this.handleKeyDown}
        onClick={this.handleToggle}
        checked={checked}
        size={size}
        tabIndex="0"
      />
    );
  }
}

Switch.propTypes = {
  /** State of the switch */
  checked: bool,
  /** Callback function of switch toggle */
  onChange: func,
  /** Size of the swtich 'small' or 'default' */
  size: oneOf(['small', 'default'])
};

Switch.defaultProps = {
  checked: false,
  size: 'default'
}

export default Switch;
