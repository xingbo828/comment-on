import React from 'react';
import styled from 'styled-components';
import {
  media
} from '../../foundation/Variables';


const StyledLabel = styled.label`
  display: block;
  padding: .5rem 0;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 1rem;

  ${media.fromMedium`
    display: inline-block;
    padding: auto;
  `}
`;

const StyledRadio = styled.input`
  opacity: 0;
  position: absolute;
  height: 18px;
  width: 18px;
  z-index: 1;
`;

const StyledRadioReplacementContainer = styled.div`
  display: flex;
`;

const StyledRadioReplacement = styled.span`
  border-color: ${props => props.theme.primaryColor};
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.borderPrimary};
  background-color: #fff;
  transition: all .3s;
  margin-right: 5px;
  ::after {
    position: absolute;
    width: 6px;
    height: 6px;
    left: 5px;
    top: 5px;
    border-radius: 4px;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: ${props => props.theme.primaryColor};
    opacity: ${props => props.checked ? '1' : '0' };
    transform: scale(${props => props.checked ? '1.2' : '0' });
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  }
`;


const Radio = ({ label, value, checked = false, onCheck }) => {
  return (
    <StyledLabel>
      <StyledRadio
        type="radio"
        value={value}
        onChange={onCheck}
        checked={checked}
      />
      <StyledRadioReplacementContainer>
        <StyledRadioReplacement checked={checked} />
        {label}
      </StyledRadioReplacementContainer>
    </StyledLabel>
  );
};

export default Radio;
