import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateTime } from '../../../../globalComponents/Form';
import {
  DateTimeSelectionContainer,
  Label,
  DateTimeSelectionInner,
  DateTimeBtnWrapper
} from './Styled';
class DateTimeSelection extends Component {
  render() {
    const { value, label, placeholder, onChange } = this.props;
    const disabledDate = (date) => date.diff(moment(), 'days') < 1 ;
    return (
      <DateTimeSelectionContainer>
        <Label>{label}</Label>
        <DateTimeSelectionInner>
          <DateTimeBtnWrapper>
            <DateTime onChange={onChange} disabledDate={disabledDate} includeTime placeholder={placeholder} />
          </DateTimeBtnWrapper>
        </DateTimeSelectionInner>
      </DateTimeSelectionContainer>
    );
  }
}

DateTimeSelection.propTypes = {

};

export default DateTimeSelection;
