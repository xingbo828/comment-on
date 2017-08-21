import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.borderPrimary};
  position: relative;

`;

export const LabelTxt = styled.span`
  padding: .5rem;
`;

export const Input = styled.input`
  outline: none;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  padding: .5rem;
  border: 0;
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
  padding: 0 .5rem;
`;

export const CalendarToolbar = styled.div`
  display: flex;
`;

export const PrevMonthBtn = styled.button`
  flex: 1;
`;
export const NextMonthBtn = styled.button`
  flex: 1;
`;
export const CurrentDate = styled.span`
  flex: 6;
  text-align: center;
`;

