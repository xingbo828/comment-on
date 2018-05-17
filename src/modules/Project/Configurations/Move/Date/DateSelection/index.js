import React, { Component } from 'react';
import moment from 'moment';
import { Legend } from '../../../../../../globalComponents/Form'
import Calendar from '../../../../../../globalComponents/Calendar';
import {
  DateTimeSelectionContainer
} from './Styled';

class DateSelection extends Component {
  render() {
    const { value, label, onChange } = this.props;
    const disabledDate = date => date.diff(moment(), 'days') < 1;
    return (
      <DateTimeSelectionContainer>
        <Legend>{label}</Legend>
        <Calendar
          value={value}
          onChange={onChange}
          disabledDate={disabledDate}
        />
      </DateTimeSelectionContainer>
    );
  }
}

DateSelection.propTypes = {};

export default DateSelection;
