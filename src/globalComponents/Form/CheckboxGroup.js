import React, { Component } from 'react';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const CheckboxGroupLabel = styled.label`
  ::after {
    content: ':';
    margin: 0 8px 0 2px;
  }
`;

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.value || ''
    };
  }

  handleChange = (event) => {
    this.setState({
      checked: event.target.value
    });
    this.props.onChange(event, event.target.value);
  };


  render() {
    const options = React.Children.map(this.props.children, (option) => {
      const {
        value,
        label,
        onChange,
        ...other
      } = option.props;
      return (
        <Checkbox
          {...other}
          value={option.props.value}
          label={option.props.label}
          onChange={this.handleChange}
          checked={option.props.value === this.state.selected}
        />
      );
    }, this);

    return (
      <div>
        <CheckboxGroupLabel>
          {this.props.label}
        </CheckboxGroupLabel>
        {options}
      </div>
    );
  }
};

export default CheckboxGroup;
