import Styled from 'styled-components';
import {
  borderPrimary,
  primaryColor,
  primaryActionColor,
  textDark
} from '../../../foundation/Variables';

export const InputContainer = Styled.div`
display: block;
padding: 0.5rem 0;
position: relative;
margin: 0 0 1rem;
`;

export const InputWrapper = Styled.div`
position: relative;
width: 300px;
`;

export const NumberHandlerWrapper = Styled.div`
position: absolute;
right: 0;
top: 0;
height: 100%;
width: 40px;
`;

export const NumberHandler = Styled.span`
cursor: pointer;
text-align: center;
line-height: 0;
height: 50%;
overflow: hidden;
color: ${textDark};
position: relative;
display: block;
width: 100%;
font-weight: 700;
`;

export const Icon = Styled.i`
  &:hover {
    color: ${primaryActionColor};
  }
`;

export const Input = Styled.input`
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

export const FocusBorder = Styled.div`
height: 2px;
width: 100%;
background: ${primaryColor};
margin-top: -2px;
transition: .3s;
transform: scale(0);
`;

export const InputLabel = Styled.label`
font-weight: bold;
font-size: 1rem;
`;

export const InputErrorMsg = Styled.span`
color: red;
`;
