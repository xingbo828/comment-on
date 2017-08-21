import React, { Component } from 'react';
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
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedDate: this.props.selectedDate,
      moment: this.props.moment,
      currentDisplayDate: this.props.selectedDate
    };
    this.isSelectedDate = this.isSelectedDate.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.isCurrentMonth = this.isCurrentMonth.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  isSelectedDate(d, w) {
    const {selectedDate, currentDisplayDate} = this.state;
    return this.isCurrentMonth(d, w) && selectedDate.month() === currentDisplayDate.month() && d === this.state.currentDisplayDate.date()
  }

  prevMonth(e) {
    e.preventDefault();
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate.clone().subtract(1, 'month')
    });
  };

  nextMonth(e) {
    e.preventDefault();
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate.clone().add(1, 'month')
    });
  };

  isCurrentMonth(d, w) {
    const prevMonth = w === 0 && d > 7;
    const nextMonth = w >= 4 && d <= 14;
    return !prevMonth && !nextMonth;
  }

  selectDate(d, w) {
    const prevMonth = w === 0 && d > 7;
    const nextMonth = w >= 4 && d <= 14;
    const m = this.state.currentDisplayDate.clone();
    if (prevMonth) {
      m.date(d).subtract(1, 'month');
    }
    else if (nextMonth) {
      m.date(d).add(1, 'month');
    }
    else {
      m.date(d);
    }
    this.setState({
      currentDisplayDate: m,
      selectedDate: m
    });

    this.props.onSelectionComplete(m);
  }

  render() {
    const { currentDisplayDate: m } = this.state;
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d1 = m.clone().subtract(1, 'month').endOf('month').date();
    const d2 = m.clone().date(1).day();
    const d3 = m.clone().endOf('month').date();
    const days = [].concat(
      range(d1 - d2 + 1, d1 + 1),
      range(1, d3 + 1),
      range(1, 42 - d3 - d2 + 1)
    );
    return (
      <CalendarContainer>
        <CalendarToolbar>
          <PrevMonthBtn onClick={this.prevMonth} />
          <CurrentDate>{this.state.currentDisplayDate.format('MMM, YYYY')}</CurrentDate>
          <NextMonthBtn onClick={this.nextMonth} />
        </CalendarToolbar>
        <CalenderTable>
          <thead>
            <tr>
              {weeks.map((w, i) => <td key={i}>{w}</td>)}
            </tr>
          </thead>
          <tbody>
            {chunk(days, 7).map((row, w) =>
              <tr key={w}>
                {row.map(d =>
                  <CalendarCell
                    key={d}
                    isCurrentMonth={this.isCurrentMonth(d, w)}
                    isSelectedDate={this.isSelectedDate(d, w)}
                    onClick={(e) => {e.preventDefault(); this.selectDate(d, w)}}
                  >
                    {d}
                  </CalendarCell>
                )}
              </tr>
            )}
          </tbody>
        </CalenderTable>
      </CalendarContainer>
    );
  }
};

export default Calendar;
