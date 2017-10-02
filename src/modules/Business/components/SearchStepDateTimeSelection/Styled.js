import styled from 'styled-components';

export const DateTimeSelectionContainer = styled.div`
  padding: 1rem 0;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

export const DateTimeSelectionInner = styled.div`
  border-bottom: 1px solid ${props=>props.theme.borderPrimary};
`;

export const DateTimeBtnWrapper = styled.span`
  max-width: 500px;
  width: 100%;
  display: inline-block;
`;
