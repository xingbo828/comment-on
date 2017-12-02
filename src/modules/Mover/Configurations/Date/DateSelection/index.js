import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../../../../../globalComponents/Calendar';
import {
  DateTimeSelectionContainer,
  Label
} from './Styled';

class DateSelection extends Component {
  render() {
    const { value, label, onChange } = this.props;
    const disabledDate = date => {
      const diff = date.diff(moment(), 'days') < 1;
      return diff;
    };
    return (
      <DateTimeSelectionContainer>
        <Label>{label}</Label>
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
