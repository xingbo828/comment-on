import React from 'react';
import {
  InputContainer,
  InputLabel,
  Input,
  FocusBorder,
  InputErrorMsg
} from './Styled'

const TextField = ({ label, type, placeholder, input, meta: { touched, error, warning }}) => {
  return (
    <InputContainer>
      <InputLabel>
        {label}
      </InputLabel>
      <Input {...input} type={type} placeholder={placeholder}/>
      <FocusBorder />
      {touched &&
      ((error &&
        <InputErrorMsg>
          {error}
        </InputErrorMsg>))}
    </InputContainer>
  );
};

export default TextField;


