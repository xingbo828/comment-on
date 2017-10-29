import styled from 'styled-components';

export const DateTimeSelectionContainer = styled.div`
  padding-bottom: ${props=>props.theme.spaces.base};
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: ${props=>props.theme.spaces.base};
  display: inline-block;
  font-weight: ${props=>props.theme.fontWeights.medium};
`;

export const DateTimeSelectionInner = styled.div`
  border-bottom: 1px solid ${props=>props.theme.borderPrimary};
`;

export const DateTimeBtnWrapper = styled.span`
  max-width: 500px;
  width: 100%;
  display: inline-block;
`;
