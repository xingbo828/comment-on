import React, { Component } from 'react';
import moment from 'moment';
import { DateTime } from '../../../../globalComponents/Form';
import {
  DateTimeSelectionContainer,
  Label,
  DateTimeSelectionInner
} from './Styled';

class DateSelection extends Component {
  render() {
    const { value, label, placeholder, onChange } = this.props;
    const disabledDate = date => date.diff(moment(), 'days') < 1;
    return (
      <DateTimeSelectionContainer>
        <Label>{label}</Label>
        <DateTimeSelectionInner>
            <DateTime
              value={value}
              onChange={onChange}
              disabledDate={disabledDate}
              placeholder={placeholder}
            />
        </DateTimeSelectionInner>
      </DateTimeSelectionContainer>
    );
  }
}

DateSelection.propTypes = {};

export default DateSelection;
