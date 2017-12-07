import React from 'react';
import {
  InputContainer,
  InputLabel,
  Input,
  FocusBorder,
  InputErrorMsg
} from './Styled';

const TextArea = ({ label, placeholder, rows, input, meta: { touched, error, warning }}) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <Input {...input} rows={rows} placeholder={placeholder} />
      <FocusBorder />
      {touched &&
      ((error &&
        <InputErrorMsg>
          {error}
        </InputErrorMsg>))}
    </InputContainer>
  );
};

TextArea.defaultProps = {
  meta: {},
  placeholder: '',
  label: '',
  type: 'text'
};

export default TextArea;
