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

const NumberField = ({ label, type, placeholder, input, meta: { touched, error, warning }}) => {
  const clickHandler = (e) => {
    e.preventDefault();
    let value = parseInt(input.value);
    if (!value) {
      value = 0;
    }
    value++;
    input.value = value;
  }

  return (
    <InputContainer>
      <InputLabel>
        {label}
      </InputLabel>
      <InputWrapper>
        <NumberHandlerWrapper>
          <NumberHandler onClick={clickHandler}>
            <Icon className="fa fa-chevron-up" aria-hidden="true"></Icon>
          </NumberHandler>
          <NumberHandler onClick={clickHandler}>
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
};


NumberField.defaultProps = {
  meta: {},
  placeholder: '',
  label: '',
  type: 'text'
};

export default NumberField;


