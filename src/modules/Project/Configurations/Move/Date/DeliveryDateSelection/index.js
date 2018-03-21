import React, { Component } from 'react';
import moment from 'moment';
import isUndefined from 'lodash/isUndefined';
import isObject from 'lodash/isObject';
import Calendar from '../../../../../../globalComponents/Calendar';
import { Legend } from '../../../../../../globalComponents/Form'
import Layout from '../../../../../../globalComponents/Layout';
import {
  RadioListItem,
  RadioList 
} from '../../../../../../globalComponents/Form/RadioNew';
import {
  DateTimeSelectionContainer,
} from './Styled';

const { FormFieldSet } = Layout.Form;


class DeliveryDateSelection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sameDayDelivery: this.isSameDayDelivery(this.props.value)
    };

  }

  isSameDayDelivery = (v) => {
    if(isUndefined(v)) {
      return undefined;
    }
    return v === 'sameDayDelivery';
  }

  toggleSameDayDelivery = (e) => {
    const val = e.target.value;
    this.setState({
      sameDayDelivery: val === 'true'
    });

    if(val === 'true') {
      this.props.onChange('sameDayDelivery');
    } else {
      this.props.onChange('');
    }
  }

  getCalenderHeight = () => {
    if (this.calendarContainer) {
      return this.calendarContainer.offsetHeight;
    }
    return 400;
  }

  render() {
    const { value, label, onChange } = this.props;
    const { sameDayDelivery } = this.state;
    const disabledDate = date => date.diff(moment(), 'days') < 1;
    return (
      <DateTimeSelectionContainer>
        <FormFieldSet>
          <Legend>{label}</Legend>
          <RadioList>
            <RadioListItem
              style={{display: 'block'}}
              label="Same day delivery"
              value="true"
              checked={sameDayDelivery === true}
              onCheck={this.toggleSameDayDelivery}
            />
            <RadioListItem
              style={{display: 'block'}}
              label="A later day"
              value="false"
              checked={sameDayDelivery === false}
              onCheck={this.toggleSameDayDelivery}
            />
          </RadioList>
        </FormFieldSet>
        { !sameDayDelivery && 
          <FormFieldSet>
            <Legend>What day would you like your items delivered?</Legend>
            <Calendar
              value={isObject(value) ? value : undefined}
              onChange={onChange}
              disabledDate={disabledDate}
            />
          </FormFieldSet>
        }
      </DateTimeSelectionContainer>
    );
  }
}

DeliveryDateSelection.propTypes = {};

export default DeliveryDateSelection;
