import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Label,
  StyledSelect
} from './Styled';

const Select = ({children, label, name, ...rest}) => {
  return (
    <Container {...rest}>
      <StyledSelect name={name}>
        {children}
      </StyledSelect>
      {label && <Label htmlFor={name}>{label}</Label>}
    </Container>
  );
};

Select.propTypes = {

};



export default Select;

