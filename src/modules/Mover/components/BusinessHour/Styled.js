import styled from 'styled-components';

export const BusinessHourContainer = styled.div`
  padding: 0.5rem 0;
  margin: 0 0 1rem;
`;

export const BusinessHourHeading = styled.label`
  font-size: 1.2rem;
`;

export const HoursSelectContainer = styled.div`

`;

export const HoursSelectInner = styled.div`
  display: flex;
  margin-bottom: ${props=>props.theme.spaces.base};
  ${props=>props.theme.media.greaterThan('sm')`
    width: 60%;
    float: left;
  `}
`;

export const WeekDaySelect = styled.div`
  flex: 1;
  padding-right: 10px;
`;

export const TimeSelect = styled.div`
  flex: 1;
  padding-right: 10px;
`;

export const HoursSelectButtonWrapper = styled.div`
  width: 100%;
  padding: 0 ${props=>props.theme.spaces.tight};
  ${props=>props.theme.media.greaterThan('sm')`
    width: 15%;
    float: left;
  `}
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

export const RemoveLink = styled.a`
  color: ${props=>props.theme.colors.danger};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
