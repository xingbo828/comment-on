import React from 'react';
import { CheckboxWrapper, CheckboxInput, CheckboxInner, CheckboxContainer, CheckboxLabel } from './Styled';

const Checkbox = ({disabled, value, label, name, onChange, checked}) => {
    return (
      <CheckboxContainer>
        <CheckboxWrapper>
            <CheckboxInput
              type="checkbox"
              name={name}
              value={value}
              disabled={disabled}
              onChange={onChange}
              checked={!!checked}
            />
            <CheckboxInner checked={!!checked} />
          </CheckboxWrapper>
        <CheckboxLabel>
          {label}
        </CheckboxLabel>
      </CheckboxContainer>
    );
}

export default Checkbox;
