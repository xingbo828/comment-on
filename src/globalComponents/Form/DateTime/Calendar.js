import React from 'react';
import {
  CalendarContainer,
  CalendarToolbar,
  PrevMonthBtn,
  NextMonthBtn,
  CurrentDate
} from './Styled';

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarToolbar>
        <PrevMonthBtn />
        <CurrentDate>Time</CurrentDate>
        <NextMonthBtn />
      </CalendarToolbar>
    </CalendarContainer>
  );
};

export default Calendar;
