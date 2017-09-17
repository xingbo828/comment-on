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
width: 100%;
`;

export const NumberHandlerWrapper = Styled.div`
position: absolute;
right: 0;
top: 0;
height: 100%;
width: 40px;
`;

const NumberHandler = Styled.span`
cursor: pointer;
text-align: center;
line-height: 0;
height: 100%;
overflow: hidden;
color: ${textDark};
position: absolute;
display: block;
width: 2rem;
font-weight: 700;
border-radius: 500px;
padding-top: 1rem;
color: ${primaryColor};
&:hover {
  color: ${primaryActionColor};
}
`;

export const PlusNumberHandler = NumberHandler.extend`
right: 0;
`;

export const MinusNumberHandler = NumberHandler.extend`
left: 0;
`;

export const Icon = Styled.i`
`;

export const Input = Styled.span`
display: block;
width: 100%;
border: solid ${borderPrimary};
border-width: 1px;
border-radius: 500px;
font-size: 1rem;
padding: 1rem 0;
outline: none;
text-align: center;

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
