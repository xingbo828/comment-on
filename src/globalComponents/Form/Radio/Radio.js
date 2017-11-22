import React from 'react';
import { string } from 'prop-types';
import {
  StyledLabel,
  StyledRadio,
  StyledRadioReplacementContainer,
  StyledRadioReplacement
} from './Styled';

const Radio = ({ label, value, color, checked = false, onCheck }) => {
  return (
    <StyledLabel>
      <StyledRadio
        type="radio"
        value={value}
        onChange={onCheck}
        checked={checked}
      />
      <StyledRadioReplacementContainer>
        <StyledRadioReplacement checked={checked} color={color}/>
        {label}
      </StyledRadioReplacementContainer>
    </StyledLabel>
  );
};

Radio.propTypes = {
  label: string.isRequired,
  value: string.isRequired
};

export default Radio;
