import React from 'react';
import { node, oneOfType, number, string, func} from 'prop-types';
import isNumber from 'lodash/isNumber';
import {
  Container,
  Label,
  StyledSelect
} from './Styled';

const Select = ({children, value, onChange, label, name, ...rest}) => {
  const formattedValue = isNumber(value) ? value.toString() : value;
  return (
    <Container {...rest}>
      <StyledSelect value={formattedValue} name={name} onChange={onChange}>
        {children}
      </StyledSelect>
      {label && <Label htmlFor={name}>{label}</Label>}
    </Container>
  );
};

Select.propTypes = {
  children: node,
  value: oneOfType([string, number]).isRequired,
  onChange: func.isRequired,
  label: string,
  name: string
};



export default Select;

