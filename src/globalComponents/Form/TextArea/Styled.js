import Styled from 'styled-components';

export const InputContainer = Styled.div`
  position: relative;
  display: block;
  padding: 0;
  margin: 0 0 3rem;
`;

export const TextArea = Styled.textarea`
  overflow: hidden;
  resize: none;
  line-height: 1.5;
  background: none;
  display: block;
  width: 100%;
  border: solid ${props=>props.theme.colors.border};
  border-width: 0 0 2px 0;
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
  position: relative;
  height: 2px;
  width: 100%;
  background: ${props=>props.theme.colors.primary};
  margin-top: -2px;
  transition: .3s;
  transform: scale(0);
  z-index: 3;
`;


export const InputErrorMsg = Styled.div`
  padding: 1rem 0 0;
  font-size: .75rem;
  letter-spacing: .05em;
  font-weight: 400;
  color: ${props => props.theme.colors.danger};
`;
