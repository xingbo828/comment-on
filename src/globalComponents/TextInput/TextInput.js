import React from 'react';
import {
  Input  
} from './Styled';

const TextInput = ({ label, placeholder }) => {
  return (
    <Container>
      <Label>{ label }</Label>
      <Input type="text" placeholder={placeholder}/> 
    </Container>
  );
};

export default TextInput;