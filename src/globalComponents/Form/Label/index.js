import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 1;
  display: block;
  font-size: 1.125rem;
  letter-spacing: .05em;
  transition: .3s;
  color: ${props=>props.theme.colors.textLight};
  transform: scale(1);
  transform-origin: top left;
  white-space: nowrap;

  ${props=>props.focused &&`
    color: ${props.theme.colors.primary};
  `}

  ${props=>(props.filled || props.focused) && `
    text-transform: uppercase;
    transform: scale(.65);
    top: 0;
  `}
`;

export const SubLabel = styled.span`
  font-size: .875rem;
  display: block;
  padding-top: ${props=>props.theme.spaces.tight};
`;
