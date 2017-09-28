import React from 'react';
import { bool, string, func } from 'prop-types';
import {
  CheckboxWrapper,
  CheckboxInput,
  CheckboxInner,
  CheckboxContainer,
  CheckboxLabel
} from './Styled';

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
            <CheckboxInner disabled={disabled} checked={!!checked} />
          </CheckboxWrapper>
        <CheckboxLabel>
          {label}
        </CheckboxLabel>
      </CheckboxContainer>
    );
}

Checkbox.propTypes = {
  disabled: bool,
  value: string,
  label: string,
  name: string,
  onChange: func,
  checked: bool
};

export default Checkbox;
