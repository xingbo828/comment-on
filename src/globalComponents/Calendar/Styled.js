import styled from 'styled-components';

export const CalendarContainer = styled.div`
`;

export const CalendarToolbar = styled.div`display: flex;`;

const CalendarBtn = styled.button`
  flex: 1;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  background-color: transparent;
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

export const CalendarCell = styled.td`
  ${props => {
    if (props.isDisabled) {
      return `
        background-color: ${props.theme.colors.offWhite};
        color: ${props.theme.colors.border};
        :hover {
          cursor: not-allowed;
        }
      `;
    } else if (props.isSelectedDate) {
      return `
        color: ${props.theme.colors.offWhite};
        background-color: ${props.theme.colors.primary};
      `;
    } else if (!props.isCurrentMonth) {
      return `
        color: ${props.theme.colors.border};
        :hover {
          background-color: ${props.theme.colors.primary};
          color: white;
        }
      `;
    } else {
      return `
        :hover {
          background-color: ${props.theme.colors.primary};
          color: white;
        }
      `;
    }
  }};
`;
