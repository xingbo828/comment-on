import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.borderPrimary};
  position: relative;
`;

export const LabelTxt = styled.span`
  padding: .5rem;
  ::before {
    padding-right: 10px;
    font-family: 'FontAwesome';
    content: '\f073';
  }
`;

export const InputBtn = styled.button`
  outline: none;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  padding: .5rem;
  border: 0;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  color: ${props =>  props.datePicked ? props.theme.textDark : 'grey'};
`;

export const DateTimeContainer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  padding: 1rem 0;
  margin-top: -1px;
  background: #fff;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-top-width: 0;
`;

export const CalendarContainer = styled.div`
  padding: 0 1rem;
`;

export const CalendarToolbar = styled.div`
  display: flex;
`;


const CalendarBtn = styled.button`
  flex: 1;
  cursor: pointer;
   outline: none;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};

  white-space: nowrap;
  padding: 0.5rem 0;
  ::after {
    color: ${props => props.theme.textDark};
    font-family: 'FontAwesome';
  }

  :hover {
    border-color: ${props => props.theme.primaryActionColor};
    ::after {
      color: ${props => props.theme.primaryActionColor};
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
  padding: .2rem;
  font-weight: bold;
`;

export const CalenderTable = styled.table`
  margin: 10px 0;
  font-size: 0.8rem;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: collapse;

  tr {
    box-sizing: border-box;
  }
  td {
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    padding: .6rem 0;
    border: 1px solid ${props => props.theme.borderPrimary};
  }

  thead {
    td {
      text-transform: uppercase;
      color: ${props => props.theme.primaryActionColor};
    }
  }

  tbody {
    td {
      :hover {
        background-color: ${props => props.theme.primaryActionColor};
        color: white;
      }
    }
  }
`;

export const CalendarCell = styled.td`
  ${props => {
    if (props.isSelectedDate) {
      return `
        color: ${props.theme.primaryActionColor};
      `;
    } else if (!props.isCurrentMonth) {
      return `
        color: ${props.theme.borderPrimary};
      `;
    }
  }}
`;
