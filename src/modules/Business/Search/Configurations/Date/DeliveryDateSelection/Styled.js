import styled from 'styled-components';

export const DateTimeSelectionContainer = styled.div`
  padding: ${props=>props.theme.spaces.tight};
`;

export const Label = styled.label`
  font-size: 1.5rem;
  display: block;
  font-weight: ${props=>props.theme.fontWeights.medium};
  margin-bottom: ${props=>props.theme.spaces.wide};
`;


export const CalendarContainer = styled.div`
  padding: ${props=>props.theme.spaces.tight} 0;
`;
