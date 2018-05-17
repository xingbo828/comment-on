import React, { Component } from 'react';
import { func, string } from 'prop-types';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    });
    this.props.onChange(event, event.target.value);
  };

  renderChildren(children) {
    return React.Children.map(children, (C) => {
      const {
        value,
        ...other
      } = C.props;
      return React.cloneElement(C, {
        onCheck: this.handleChange,
        checked: value === this.state.selected,
        ...other
      })
    }, this);
  }

  render() {
    return (
      <div>
        {this.renderChildren(this.props.children)}
      </div>
    );
  }
};

RadioGroup.propTypes = {
  onChange: func.isRequired,
  value: string,
};

export default RadioGroup;
