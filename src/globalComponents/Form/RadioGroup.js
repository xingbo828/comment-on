import React, { Component } from 'react';
import Radio from './Radio';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 0 1rem;  
`;

const RadioGroupLabel = styled.label`
  ::after {
    content: ':';
    margin: 0 8px 0 2px;
  }
`;

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || ''
    };
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    });
    this.props.onChange(event, event.target.value);
  };


  render() {
    const options = React.Children.map(this.props.children, (option) => {
      const {
        value,
        label,
        ...other
      } = option.props;

      return (
        <Radio
          {...other}
          value={option.props.value}
          label={option.props.label}
          onCheck={this.handleChange}
          checked={option.props.value === this.state.selected}
        />
      );
    }, this);

    return (
      <Container>
        <RadioGroupLabel>
          {this.props.label}
        </RadioGroupLabel>
        {options}
      </Container>
    );
  }
};

export default RadioGroup;
