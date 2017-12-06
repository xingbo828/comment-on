import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
`;

export const SubLabel = styled.span`
  color: ${props=>props.theme.colors.textLight};
  font-weight: .825rem;
  display: block;
  padding-top: ${props=>props.theme.spaces.tight};
`;
