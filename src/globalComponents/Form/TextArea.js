import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: block;
  padding: 0.5rem 0;
  position: relative;
  margin: 0 0 1rem;
`;

const InputErrorMsg = styled.span`
  color: red;
`;

const TextAreaStyled = styled.textarea`
  width: 100%;
  border-radius: 3px;
  font-size: 1rem;
  padding: .6rem;
  display: block;
  outline: none;
  margin-top: 1rem;
  border: 1px solid ${props => props.theme.borderPrimary};
  box-shadow: 0;
  transition: all .5s;

  :focus {
    border-color: ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 1.5px ${props => props.theme.primaryColor};
  }
`;

const InputLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

const TextArea = ({ label, rows, input, meta: { touched, error, warning }}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TextAreaStyled {...input} rows={rows}/>
      {touched &&
      ((error &&
        <InputErrorMsg>
          {error}
        </InputErrorMsg>))}
    </InputContainer>
  );
};

export default TextArea;
