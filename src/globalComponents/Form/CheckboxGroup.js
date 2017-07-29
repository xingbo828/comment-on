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
      checked: props.value || []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const value = [...this.state.checked];
    if (event.target.checked) {
      value.push(event.target.name)
    } else {
      value.splice(value.indexOf(event.target.name), 1);
    }
    this.state.checked = value;
    this.props.input.onChange(value);
  };


  render() {
    const { input, label } = this.props;
    const checkboxes = this.props.options.map((option, index) => {
      const name = `${input.name}[${index}]`;
      return (
        <label key={index}>
          <span>
            <input type="checkbox"
              name={name}
              value={option.label}
              checked={this.state.checked.indexOf(name) !== -1}
              onChange={this.handleChange} />
          </span>
          <span>
            {option.label}
          </span>
        </label>
      );
    }, this);

    return (
      <div>
        <CheckboxGroupLabel>
          {label}
        </CheckboxGroupLabel>
        {checkboxes}
      </div>
    );
  }
};

export default CheckboxGroup;
