import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../../../../../globalComponents/Calendar';
import {
  DateTimeSelectionContainer,
  Label
} from './Styled';

class DateSelection extends Component {
  render() {
    const { value, label, placeholder, onChange } = this.props;
    const disabledDate = date => date.diff(moment(), 'days') < 1;
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
