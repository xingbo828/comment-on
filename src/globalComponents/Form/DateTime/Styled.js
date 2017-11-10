import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputBtn = styled.button`
${props => props.theme.media.lessThan('xs')`
  display: none;
`}
  outline: none;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.5rem 0 0.5rem 2.5rem;
  border: 0;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  color: ${props => (props.datePicked ? props.theme.colors.textDark : 'grey')};

  ::before {
    padding-right: 0px;
    font-family: 'FontAwesome';
    content: '\f073';
    color: ${props => props.theme.colors.textDark};
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    left: 10px;
    line-height: 40px;
  }
`;

export const DateTimeContainer = styled.div`
  ${props => props.theme.media.greaterThan('xs')`
    display: ${props => (props.visible ? 'block' : 'none')};
    z-index: ${props => props.theme.zIndex.dropdown};
    top: 100%;
    left: -1px;
    right: -1px;
    position: absolute;
    width: auto;
    max-width: 550px;
  `}
  width: 100%;
  position:relative;
  border: 1px solid ${props => props.theme.colors.border};
  margin-top: -1px;
  background: #fff;
  border-top-width: 0;
  height: 310px;
`;

export const CalendarContainer = styled.div`
  position: absolute;
  z-index: ${props => props.theme.zIndex.dropdown};
  top: 0;
  left: 0;
  right: 0;

  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: 0.3s;
  padding: 0.5rem 1rem 0;
  transform: rotateY(${props => (props.visible ? '0deg' : '180deg')});
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
    height: 35px;
    border: 1px solid ${props => props.theme.colors.border};
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

export const TimeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  transform: rotateY(${props => (props.visible ? '0deg' : '-180deg')});
  transform-style: preserve-3d;
  backface-visibility: hidden;
  padding: 2.5rem 1rem 0;
  transition: 0.3s;
`;

export const TimeSelection = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

export const TimeSelectionDisplay = styled.span`
  font-size: 3.5rem;
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
  border: 1px solid ${props => props.theme.colors.border};
  white-space: nowrap;
  position: relative;
  width: 30px;
  height: 30px;
  ::after {
    position: absolute;
    font-size: 1rem;
    font-family: 'FontAwesome';
  }
  :hover {
    border-color: ${props => props.theme.colors.primary};
    ::after {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const TimeChangeBtnWrapper = styled.span`text-align: center;`;
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
