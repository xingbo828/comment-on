import Styled from 'styled-components';

export const InputContainer = Styled.div`
  display: block;
  padding: 0.5rem 0;
  position: relative;
  margin: 0 0 1rem;
`;

export const Input = Styled.input`
  display: block;
  width: 100%;
  border: solid ${props=>props.theme.colors.border};
  border-width: 0 0 1px 0;
  font-size: 1rem;
  padding: 1rem 0;
  outline: none;
  margin: 0;
  border-radius: 0;
  &::placeholder {
    color: ${props=>props.theme.colors.textLight};
  }
  &:focus + div{
    transform: scale(1);
  }
`;

export const FocusBorder = Styled.div`
  height: 2px;
  width: 100%;
  background: ${props=>props.theme.colors.primary};
  margin-top: -2px;
  transition: .3s;
  transform: scale(0);
`;


export const InputErrorMsg = Styled.span`
  color: red;
`;
