import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Label,
  StyledSelect
} from './Styled';

const Select = ({children, value, onChange, label, name, ...rest}) => {
  return (
    <Container {...rest}>
      <StyledSelect value={value} name={name} onChange={onChange}>
        {children}
      </StyledSelect>
      {label && <Label htmlFor={name}>{label}</Label>}
    </Container>
  );
};

Select.propTypes = {

};



export default Select;

