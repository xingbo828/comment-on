import styled from 'styled-components';

import {
  borderPrimary,
  primaryColor
} from '../../../foundation/Variables';

export const InputContainer = styled.div`
  display: block;
  padding: 0.5rem 0;
  position: relative;
  margin: 0 0 1rem;
`;

export const InputErrorMsg = styled.span`
  color: red;
`;

export const Input = styled.textarea`
  display: block;
  width: 100%;
  border: solid ${borderPrimary};
  border-width: 0 0 1px 0;
  font-size: 1rem;
  padding: 1rem 0;
  outline: none;

  &:focus + div{
    transform: scale(1);
  }
`;

export const InputLabel = styled.label`
  font-size: 1.5rem;
`;


export const FocusBorder = styled.div`
  height: 2px;
  width: 100%;
  background: ${primaryColor};
  margin-top: -2px;
  transition: .3s;
  transform: scale(0);
`;
