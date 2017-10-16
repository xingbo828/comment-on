import React, { Component } from 'react';
import {
  InputContainer,
  Input,
  FocusBorder,
  InputErrorMsg,
  InputWrapper,
  PlusNumberHandler,
  MinusNumberHandler,
  Icon
} from './Styled'

class NumberField extends Component {
  constructor(props) {
    super(props);
    this.handleClickUp = this.handleClick.bind(this, 1);
    this.handleClickDown = this.handleClick.bind(this, -1);

  }

  handleClick(interval, e) {
    e.preventDefault();
    const input = this.props.input;
    let value = parseInt(input.value, 10);
    if (!value) {
      value = 0;
    }
    value += interval;

    if (value < this.props.min || value > this.props.max) {
      value -= interval;
    }

    input.value = value;
    this.setState({
      input: input
    });
    this.props.input.onChange(value);
  }

  render() {
    const { placeholder, input, meta: { touched, error }} = this.props;
    return (
      <InputContainer>
        <InputWrapper>
          <PlusNumberHandler onClick={this.handleClickUp}>
            <Icon className="fa fa-plus" aria-hidden="true"></Icon>
          </PlusNumberHandler>
          <MinusNumberHandler onClick={this.handleClickDown}>
            <Icon className="fa fa-minus" aria-hidden="true"></Icon>
          </MinusNumberHandler>
          <Input {...input} placeholder={placeholder}>{input.value || 0}</Input>
        </InputWrapper>
        <FocusBorder />
        {touched &&
        ((error &&
          <InputErrorMsg>
            {error}
          </InputErrorMsg>))}
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


