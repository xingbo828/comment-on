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
  margin-top: -1px;
  background: #fff;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-top-width: 0;
  height: 310px;
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: 0;
  left:0;
  right:0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition:  .3s;
  padding: .5rem 1rem 0;
  transform: rotateY(${props => props.visible ? '0deg': '180deg'});
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

  td {
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    height: 35px;
    border: 1px solid ${props => props.theme.borderPrimary};
  }

  thead {
    td {
      text-transform: uppercase;
      color: ${props => props.theme.primaryActionColor};
    }
  }
`;

export const CalendarCell = styled.td`
  ${props => {
    if (props.isDisabled) {
      return `
        background-color: ${props.theme.offWhite};
        color: ${props.theme.borderPrimary};
        :hover {
          cursor: not-allowed;
        }
      `;
    }
    else if (props.isSelectedDate) {
      return `
        color: ${props.theme.primaryActionColor};
        :hover {
          background-color: ${props.theme.primaryActionColor};
          color: white;
        }
      `;
    } else if (!props.isCurrentMonth) {
      return `
        color: ${props.theme.borderPrimary};
        :hover {
          background-color: ${props.theme.primaryActionColor};
          color: white;
        }
      `;
    } else {
      return `
        :hover {
          background-color: ${props.theme.primaryActionColor};
          color: white;
        }
      `;
    }
  }}
`;

export const TimeContainer = styled.div`
  position: absolute;
  top: 0;
  left:0;
  right:0;
  transform: rotateY(${props => props.visible ? '0deg': '-180deg'});
  transform-style: preserve-3d;
  backface-visibility: hidden;
  padding: 2.5rem 1rem 0;
  transition: .3s;
`;

export const TimeSelection = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

export const TimeSelectionDisplay = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 1rem 0;
  text-align: center;
`;

export const TimeSelectionHour = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  padding: 0 0 0 2rem;
`;

export const TimeSelectionMin = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  padding: 0 2rem 0 0;
  position: relative;
  ::before {
    content: ':';
    position: absolute;
    top: 30%;
    font-size: 2.5rem;
    left: -3px;
    font-weight: bold;
  }
`;

const TimeChangeBtn = styled.button`
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  white-space: nowrap;
  position: relative;
  width:30px;
  height:30px;
  ::after {
    position:absolute;
    font-size: 1rem;
    font-family: 'FontAwesome';
  }
  :hover {
    border-color: ${props => props.theme.primaryActionColor};
    ::after {
      color: ${props => props.theme.primaryActionColor};
    }
  }
`;

export const TimeChangeBtnWrapper = styled.span`
  text-align: center;
`;
export const TimeChangeBtnInc = TimeChangeBtn.extend`
  ::after {
    content: '\f0de';
    top: 35%;
    left: 35%;
  }
`;

export const TimeChangeBtnDec = TimeChangeBtn.extend`
  ::after {
    content: '\f0dd';
    top: 10%;
    left: 35%;
  }
`;

export const DoneBtnWrapper = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;
