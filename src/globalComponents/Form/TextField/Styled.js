import Styled from 'styled-components';

export const Container = Styled.div`
  position: relative;
  display: block;
  padding: 0;
  margin: 0 0 1.5rem;
`;

export const InputContainer = Styled.div`
  position: relative;
  border-radius: 4px;
  margin-bottom: -1px;
  overflow: hidden;

  &:after {
    position: absolute;
    font-family: 'FontAwesome';
    line-height: 75px;
    right: 1.5rem;
    font-size: 1.25rem;
    top: 0;
    transition: .3s;
    opacity: 0;
    z-index: 5;
  }

  ${props=>props.error && `
    &:after {
      opacity: 1;
      color: ${props.theme.colors.danger};
      content: '\f057';
    }
  `}
`

export const Input = Styled.input`
  z-index: 2;
  background: none;
  display: block;
  width: 100%;
  border: solid ${props=>props.theme.colors.offWhite};
  border-width: 2px;
  font-size: 1.125rem;
  padding: 1.5625rem 1.5rem;
  border-radius: 6px;
  outline: none;
  margin: 0;
  position: relative;
  background: ${props=>props.theme.colors.offWhite};
  transition: .3s;

  ${props=>props.filled && `
      padding: 2.125rem 1.5rem 1rem;
      background: white;
      border-color: ${props.theme.colors.border};
  `}

  // ${props=>props.error && `
  //     border-color: ${props.theme.colors.danger};
  // `}


  &::placeholder {
    color: ${props=>props.theme.colors.textLight};
  }

  &:focus {
    ${props=>props.filled && `
      border-color: ${props.theme.colors.primary};
    `
  }

  &:focus + div {
    transform: scale(1);
  }
`;

export const FocusBorder = Styled.div`
  position: relative;
  height: 2px;
  width: 100%;
  background: ${props=>props.theme.colors.textLight};
  margin-top: -2px;
  transition: .3s;
  transform: scale(0);
  z-index: 3;

  ${props=>props.filled && `
    opacity: 0;
  `}
`;


export const InputErrorMsg = Styled.div`
  padding: 1rem 1.5rem 0;
  font-size: .75rem;
  letter-spacing: .05em;
  font-weight: 600;
  color: ${props => props.theme.colors.danger};
  transition: .3s;
  overflow: hidden;
  max-height: ${props=>props.active ? '100px' : '0' };
  opacity: ${props=>props.active ? '1' : '0' };
  padding: ${props=>props.active ? '1rem 1.5rem 0' : '0 1.5rem' };
`;
