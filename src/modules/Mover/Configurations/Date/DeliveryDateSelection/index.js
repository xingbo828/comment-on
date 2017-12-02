import React, { Component } from 'react';
import moment from 'moment';
import isUndefined from 'lodash/isUndefined';
import isObject from 'lodash/isObject';
import Calendar from '../../../../../globalComponents/Calendar';
import { Radio } from '../../../../../globalComponents/Form';
import Animation from '../../../../../globalComponents/Animation';
import {
  DateTimeSelectionContainer,
  Label,
  CalendarContainer
} from './Styled';

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
        <Label>{label}</Label>
        <Radio.Radio
          style={{display: 'block'}}
          label="Same day delivery"
          value="true"
          checked={sameDayDelivery === true}
          onCheck={this.toggleSameDayDelivery}
        />
        <Radio.Radio
          style={{display: 'block'}}
          label="A later day"
          value="false"
          checked={sameDayDelivery === false}
          onCheck={this.toggleSameDayDelivery}
        />
        {<Animation.Reveal timeout={300} height={this.getCalenderHeight()} in={sameDayDelivery===false}>
          {() => (
            <CalendarContainer innerRef={container => (this.calendarContainer = container)}>
              <Calendar
                value={isObject(value) ? value : undefined}
                onChange={onChange}
                disabledDate={disabledDate}
              />
            </CalendarContainer>
          )}
        </Animation.Reveal>}

      </DateTimeSelectionContainer>
    );
  }
}

DeliveryDateSelection.propTypes = {};

export default DeliveryDateSelection;
