import React, { Component } from 'react';
import { arrayOf, instanceOf, func } from 'prop-types';
import Moment from 'moment';
import range from 'lodash/range';
import chunk from 'lodash/chunk';
import {
  CalendarContainer,
  CalendarToolbar,
  PrevMonthBtn,
  NextMonthBtn,
  CurrentDate,
  CalenderTable,
  CalendarCell
} from './Styled';

class Calendar extends Component {
  isSelectedDate = (d, w) => {
    const date = this.convertToDate(d, w)
    return this.props.selectedDate.findIndex(d => d.isSame(date)) !== -1;
  }

  isCurrentMonth = (d, w) => {
    const prevMonth = w === 0 && d > 7;
    const nextMonth = w >= 4 && d <= 14;
    return !prevMonth && !nextMonth;
  }

  isDateDisabled = (d, w) => {
    const m = this.convertToDate(d, w);
    return this.props.disabledDate(m);
  }

  convertToDate = (d, w) => {
    const prevMonth = w === 0 && d > 7;
    const nextMonth = w >= 4 && d <= 14;
    const m = this.props.currentDisplayDate.clone();
    if (prevMonth) {
      m.subtract(1, 'month').date(d);
    } else if (nextMonth) {
      m.add(1, 'month').date(d);
    } else {
      m.date(d);
    }
    return m;
  }

  selectDate = (d, w) => {
    const m = this.convertToDate(d, w);
    if (!this.isDateDisabled(d, w)) {
      this.props.onSelectionComplete(m);
    }
  }

  handleClick = (d, w) => (e) => {
    e.preventDefault();
    this.selectDate(d, w);
  }

  render() {
    const { visible, currentDisplayDate: m, nextMonth, prevMonth } = this.props;
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d1 = m
      .clone()
      .subtract(1, 'month')
      .endOf('month')
      .date();
    const d2 = m
      .clone()
      .date(1)
      .day();
    const d3 = m
      .clone()
      .endOf('month')
      .date();
    const days = [].concat(
      range(d1 - d2 + 1, d1 + 1),
      range(1, d3 + 1),
      range(1, 42 - d3 - d2 + 1)
    );
    return (
      <CalendarContainer visible={visible}>
        <CalendarToolbar>
          <PrevMonthBtn onClick={prevMonth} />
          <CurrentDate>
            {m.format('MMM, YYYY')}
          </CurrentDate>
          <NextMonthBtn onClick={nextMonth} />
        </CalendarToolbar>
        <CalenderTable>
          <thead>
            <tr>{weeks.map((w, i) => <td key={i}>{w}</td>)}</tr>
          </thead>
          <tbody>
            {chunk(days, 7).map((row, w) => (
              <tr key={w}>
                {row.map(d => (
                  <CalendarCell
                    key={d}
                    isDisabled={this.isDateDisabled(d, w)}
                    isCurrentMonth={this.isCurrentMonth(d, w)}
                    isSelectedDate={this.isSelectedDate(d, w)}
                    onClick={this.handleClick(d, w)}
                  >{d}</CalendarCell>
                ))}
              </tr>
            ))}
          </tbody>
        </CalenderTable>
      </CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  selectedDate: arrayOf(instanceOf(Moment)),
  disabledDate: func
};
export default Calendar;
