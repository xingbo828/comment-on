import styled from 'styled-components';

export const BusinessHourContainer = styled.div`
  padding: 0.5rem 0;
  margin: 0 0 1rem;
`;

export const BusinessHourHeading = styled.label`
  font-size: 1.2rem;
`;

export const HoursSelectContainer = styled.div`
  display: flex;
`;

export const WeekDaySelect = styled.div`
  flex: 1;
  padding-right: 10px;
  > select {
    width: 100%;
  }
`;

export const TimeSelect = styled.div`
  flex: 1;
  padding-right: 10px;
  > select {
    width: 100%;
  }
`;

export const HoursSelectButtonWrapper = styled.div`
  flex: 1;
`;

export const HoursList = styled.ul`
  padding: 0;
`;

export const HoursListItem = styled.li`
  list-style: none;
  padding:5px 0;
`;

export const HoursListItemText = styled.span`
  font-size: 0.9rem;
  padding-right: 20px;
`;

export const HoursListItemLink = styled.span`

`;
