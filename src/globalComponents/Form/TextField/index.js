import React from 'react';
import { Label } from '../Label';
import {
  InputContainer,
  Input,
  FocusBorder,
  InputErrorMsg
} from './Styled'

const TextField = ({ label, type, autoComplete, placeholder, input, meta: { touched, error, warning }}) => {
  return (
    <InputContainer>
      {label && <Label>
        {label}
      </Label>}
      <Input {...input} type={type} autoComplete={autoComplete} placeholder={placeholder}/>
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
  type: 'text',
  autoComplete: 'on'
};

export default TextField;


