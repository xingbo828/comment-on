import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin: 0 0 4rem; 
`;

export const CalendarToolbar = styled.div`display: flex;`;

const CalendarBtn = styled.button`
  box-shadow: ${props=>props.theme.boxShadow.large};
  flex: 1;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};

  white-space: nowrap;
  padding: 0.5rem 0;
  ::after {
    color: ${props => props.theme.colors.textDark};
    font-family: 'FontAwesome';
  }

  :hover {
    border-color: ${props => props.theme.colors.primary};
    ::after {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const PrevMonthBtn = CalendarBtn.extend`
  ::after {
    content: '\f177';
  }
`;
export const NextMonthBtn = CalendarBtn.extend`
  ::after {
    content: '\f178';
  }
`;

export const CurrentDate = styled.span`
  flex: 6;
  text-align: center;
  padding: 0.2rem;
  font-weight: bold;
`;

export const CalenderTable = styled.table`
  box-shadow: ${props=>props.theme.boxShadow.large};
  border-radius: 4px;
  margin: 10px 0;
  font-size: 0.8rem;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: collapse;

  td {
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid ${props => props.theme.colors.border};
    padding: .75rem 0;
    ${props=>props.theme.media.greaterThan('sm')`
      padding: ${props.theme.spaces.base} 0;
    `}
  }

  thead {
    td {
      text-transform: uppercase;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const _getCalendarCellBackgroundColor = (props) => {
  if (props.isDisabled) {
    return props.theme.colors.offWhite;
  } else if(props.isSelectedDate) {
    return props.theme.colors.primary;
  }
  return 'transparent';
}

const _getCalendarCellTextColor = (props) => {
  if (props.isDisabled) {
    return props.theme.colors.border;
  } else if(props.isSelectedDate) {
    return props.theme.colors.offWhite;
  } else if(!props.isCurrentMonth) {
    return props.theme.colors.textLight;
  }
  return props.theme.colors.textDark;
}

export const CalendarCell = styled.td`
  background-color: ${_getCalendarCellBackgroundColor};
  color: ${_getCalendarCellTextColor};
  &:hover {
    cursor: ${props=>props.isDisabled ? 'not-allowed' : 'pointer'};
  }
`;
