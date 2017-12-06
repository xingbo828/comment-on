import React from 'react';
import { Label } from '../Label';
import {
  InputContainer,
  Input,
  FocusBorder,
  InputErrorMsg
} from './Styled'

const TextField = ({ label, type, placeholder, input, meta: { touched, error, warning }}) => {
  return (
    <InputContainer>
      {label && <Label>
        {label}
      </Label>}
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


TextField.defaultProps = {
  meta: {},
  placeholder: '',
  label: '',
  type: 'text'
};

export default TextField;


