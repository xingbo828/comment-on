import React, { Component } from 'react';
import {
  InputContainer,
  Input,
  FocusBorder,
  InputWrapper,
  PlusNumberHandler,
  MinusNumberHandler,
  Icon
} from './Styled'

class NumberField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  handleClick = (interval) => (e) => {
    e.preventDefault();
    let value = this.state.value;
    value += interval;

    if (value < this.props.min || value > this.props.max) {
      value -= interval;
    }

    this.setState({
      value
    });
    this.props.onChange(value);
  }

  incAvailable = (max) => (v) => v+1 <= max;
  decAvailable = (min) => (v) => v-1 >= min;

  render() {
    const { placeholder, onChange, max, min } = this.props;
    const { value } = this.state;
    return (
      <InputContainer>
        <InputWrapper>
          <PlusNumberHandler available={this.incAvailable(max)(value)} onClick={this.handleClick(1)}>
            <Icon className="fa fa-plus" aria-hidden="true"></Icon>
          </PlusNumberHandler>
          <MinusNumberHandler available={this.decAvailable(min)(value)} onClick={this.handleClick(-1)}>
            <Icon className="fa fa-minus" aria-hidden="true"></Icon>
          </MinusNumberHandler>
          <Input onChange={onChange} placeholder={placeholder}>{value}</Input>
        </InputWrapper>
        <FocusBorder />
      </InputContainer>
    );
  }
}

NumberField.defaultProps = {
  meta: {},
  placeholder: '',
  label: '',
  value: 0,
  min: 0,
  max: 10
};

export default NumberField;


