import React, { Component } from 'react';
import {
  InputContainer,
  InputLabel,
  Input,
  FocusBorder,
  InputErrorMsg,
  InputWrapper,
  NumberHandlerWrapper,
  NumberHandler,
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
    let value = parseInt(input.value);
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
    const { label, type, placeholder, input, meta: { touched, error, warning }} = this.props;
    return (
      <InputContainer>
        <InputLabel>
          {label}
        </InputLabel>
        <InputWrapper>
          <NumberHandlerWrapper>
            <NumberHandler onClick={this.handleClickUp}>
              <Icon className="fa fa-chevron-up" aria-hidden="true"></Icon>
            </NumberHandler>
            <NumberHandler onClick={this.handleClickDown}>
              <Icon className="fa fa-chevron-down" aria-hidden="true"></Icon>
            </NumberHandler>
          </NumberHandlerWrapper>
          <Input {...input} type={type} placeholder={placeholder}/>
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
  min: 1,
  max: 10,
  type: 'text'
};

export default NumberField;


