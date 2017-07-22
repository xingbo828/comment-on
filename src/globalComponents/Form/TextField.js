import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: block;
  padding: 0.5rem 0;
`;

const InputLabel = styled.label`
  ::after {
    content: ':';
    margin: 0 8px 0 2px;
  }
`;

const InputErrorMsg = styled.span`
  color: red;
`;

const TextField = ({ label, type, input, meta: { touched, error, warning }}) => {
  return (
    <InputContainer>
      <InputLabel>
        {label}
      </InputLabel>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error &&
        <InputErrorMsg>
          {error}
        </InputErrorMsg>))}
    </InputContainer>
  );
};

export default TextField;


