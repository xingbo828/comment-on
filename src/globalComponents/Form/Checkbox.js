import React from 'react';
import styled from 'styled-components';

const InputErrorMsg = styled.span`
  color: red;
`;
const Checkbox = ({ label, input, meta: { touched, error, warning } }) => {
  return (
    <label>
      <span>
        <input type="checkbox" checked={!!input.value} {...input} />
      </span>
      <span>
        {label}
      </span>
      { touched &&
      ((error &&
        <InputErrorMsg>
          {error}
        </InputErrorMsg>))}
    </label>
  );
};

export default Checkbox;
