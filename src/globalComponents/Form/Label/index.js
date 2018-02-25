import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: .875rem;
  letter-spacing: .05em;
  transition: .3s;
  color: ${props=>props.highlight ? props.theme.colors.primary: props.theme.colors.textLight };
`;

export const SubLabel = styled.span`
  font-size: .875rem;
  display: block;
  padding-top: ${props=>props.theme.spaces.tight};
`;
