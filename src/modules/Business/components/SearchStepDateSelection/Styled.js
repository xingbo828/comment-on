import styled from 'styled-components';

export const DateTimeSelectionContainer = styled.div`
  padding: ${props=>props.theme.spaces.wide} 0;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: ${props=>props.theme.spaces.base};
  display: inline-block;
  font-weight: ${props=>props.theme.fontWeights.medium};
`;

export const DateTimeSelectionInner = styled.div`
  ${props=>props.theme.media.greaterThan('sm')`
    border-bottom: 1px solid ${props=>props.theme.borderPrimary};
  `}
`;

