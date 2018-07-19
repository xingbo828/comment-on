import Styled from 'styled-components';

export const InputContainer = Styled.div`
  position: relative;
  display: block;
  padding: 0;
  margin: 0 0 1rem;
`;

export const Input = Styled.input`
  z-index: 2;
  background: none;
  display: block;
  width: 100%;
  border: solid ${props=>props.theme.colors.border};
  border-width: 0 0 1px 0;
  font-size: 1.125rem;
  padding: 2rem 0 1.5rem;
  outline: none;
  margin: 0;
  border-radius: 0;
  position: relative;

  &::placeholder {
    color: ${props=>props.theme.colors.textLight};
  }

  &:focus + div {
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


export const InputErrorMsg = Styled.div`
  padding: 1rem 0 0;
  font-size: .75rem;
  letter-spacing: .05em;
  font-weight: 600;
  color: ${props => props.theme.colors.danger};
  visibility: ${props=>props.active ? 'visible' : 'hidden' };
`;
