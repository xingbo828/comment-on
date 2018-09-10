import React, { Component } from 'react';
import moment from 'moment';
import { arrayOf, instanceOf, func } from 'prop-types';

import Calendar from './Calendar';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.value,
      currentDisplayDate: moment().startOf('day')
    };

  }

  prevMonth = (e) => {
    e.preventDefault();
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate
        .clone()
        .subtract(1, 'month')
    });
  }

  nextMonth = (e) => {
    e.preventDefault();
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate.clone().add(1, 'month')
    });
  }

  sortDates(dates) {
    return dates.sort((a, b) => {
      return a.diff(b)
    })
  }

  onSelect = (value) => {
    const index = this.state.selectedDate.findIndex((d) => d.isSame(value));
    let newSelectedDate
    if(index === -1) {
      newSelectedDate = this.state.selectedDate.concat([value])
    } else {
      newSelectedDate = this.state.selectedDate.filter((d) => !d.isSame(value))
    }

    newSelectedDate = this.sortDates(newSelectedDate)

    this.setState(() => ({
      selectedDate: newSelectedDate
    }));
    this.props.onChange(newSelectedDate)
  }

  render() {
    const { disabledDate } = this.props;
    const { selectedDate, currentDisplayDate } = this.state;
    return (
      <React.Fragment>
        <Calendar
          disabledDate={disabledDate}
          selectedDate={selectedDate}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
          onSelectionComplete={this.onSelect}
          currentDisplayDate={currentDisplayDate}
        />

      </React.Fragment>
    );
  }
}

CalendarContainer.propTypes = {
  value: arrayOf(instanceOf(moment)),
  onChange: func,
  disabledDate: func
};

CalendarContainer.defaultProps = {
  value: [],
  disabledDate: () => false
};

export default CalendarContainer;
