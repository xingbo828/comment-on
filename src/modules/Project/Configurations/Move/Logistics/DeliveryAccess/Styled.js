import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  margin-bottom: ${props=>props.theme.spaces.wide};
`;

export const Label = styled.label`
  font-size: 1.5rem;
  display: block;
  font-weight: ${props=>props.theme.fontWeights.medium};
  margin-bottom: ${props=>props.theme.spaces.wide};
`;

export const SelectContainer = styled.div`
  padding: ${props=>props.theme.spaces.tight} ${props=>props.theme.spaces.wide};
`;
