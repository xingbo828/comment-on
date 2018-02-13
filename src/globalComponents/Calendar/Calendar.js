import React, { Component } from 'react';
import { instanceOf, func } from 'prop-types';
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
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedDate: this.props.selectedDate,
      currentDisplayDate: this.props.selectedDate
    };
    this.isSelectedDate = this.isSelectedDate.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.isCurrentMonth = this.isCurrentMonth.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.getSelectedDate = this.getSelectedDate.bind(this);
    this.isDateDisabled = this.isDateDisabled.bind(this);
    this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardEvent);
  }

  handleKeyboardEvent(e) {
    if (e.code === 'ArrowLeft') {
      this.prevMonth(e);
    } else if (e.code === 'ArrowRight') {
      this.nextMonth(e);
    }
  }

  isSelectedDate(d, w) {
    const { selectedDate, currentDisplayDate } = this.state;

    if(this.isCurrentMonth(d, w) &&
    selectedDate.month() === currentDisplayDate.month() &&
    d === this.state.currentDisplayDate.date()) {
    }

    return (
      this.isCurrentMonth(d, w) &&
      selectedDate.month() === currentDisplayDate.month() &&
      d === this.state.currentDisplayDate.date()
    );
  }

  prevMonth(e) {
    e.preventDefault();
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate
        .clone()
        .subtract(1, 'month')
    });
  }

  nextMonth(e) {
    e.preventDefault();
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate.clone().add(1, 'month')
    });
  }

  isCurrentMonth(d, w) {
    const prevMonth = w === 0 && d > 7;
    const nextMonth = w >= 4 && d <= 14;
    return !prevMonth && !nextMonth;
  }

  isDateDisabled(d, w) {
    const m = this.getSelectedDate(d, w);
    return this.props.disabledDate(m);
  }

  getSelectedDate(d, w) {
    const prevMonth = w === 0 && d > 7;
    const nextMonth = w >= 4 && d <= 14;
    const m = this.state.currentDisplayDate.clone();
    if (prevMonth) {
      m.subtract(1, 'month').date(d);
    } else if (nextMonth) {
      m.add(1, 'month').date(d);
    } else {
      m.date(d);
    }
    return m;
  }

  selectDate(d, w) {
    const m = this.getSelectedDate(d, w);
    if (!this.isDateDisabled(d, w)) {
      this.setState(() => ({
        currentDisplayDate: m,
        selectedDate: m
      }), () => {
        this.props.onSelectionComplete(m);
      });

    }
  }

  render() {
    const { visible } = this.props;
    const { currentDisplayDate: m } = this.state;
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
          <PrevMonthBtn onClick={this.prevMonth} />
          <CurrentDate>
            {this.state.currentDisplayDate.format('MMM, YYYY')}
          </CurrentDate>
          <NextMonthBtn onClick={this.nextMonth} />
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
                    onClick={e => {
                      e.preventDefault();
                      this.selectDate(d, w);
                    }}
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
  selectedDate: instanceOf(Moment),
  disabledDate: func
};
export default Calendar;
