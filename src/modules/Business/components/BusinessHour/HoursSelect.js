import React, { Component } from 'react';
import { weekdays, time } from './constants';
import {
  HoursSelectContainer,
  WeekDaySelect,
  TimeSelect,
  HoursSelectButtonWrapper
} from './Styled';
import { Select, Option, Button } from '../../../../globalComponents/Form';
import moment from 'moment';

class HoursSelect extends Component {
  constructor() {
    super();
    this.state = {
      day: 'mon',
      startTime: '0',
      endTime: '0.5'
    };
    this.generateEndTimeOption = this.generateEndTimeOption.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleAddHours = this.handleAddHours.bind(this);
  }

  handleDayChange(e) {
    this.setState({
      day: e.target.value
    });
  }

  handleStartTimeChange(e) {
    this.setState({
      startTime: e.target.value
    });
  }

  handleEndTimeChange(e) {
    this.setState({
      endTime: e.target.value
    });
  }

  handleAddHours(e) {
    e.preventDefault();
    this.props.addHours(this.state);
  }

  generateTimeOption(time) {
    const hour = Math.floor(time);
    const minute = (time - hour) * 60;
    return (
      <Option key={time} value={time}>
        {moment().hour(time).minutes(minute).format('h:mm a')}
      </Option>
    );
  }

  generateEndTimeOption(time) {
    if (!this.state.startTime || time > this.state.startTime) {
      return this.generateTimeOption(time);
    }
  }


  render() {
    return (
      <HoursSelectContainer>
        <WeekDaySelect>
          <Select name="day" onChange={this.handleDayChange}>
            {weekdays.map(day =>
              <Option key={day} value={day}>
                {day[0].toUpperCase() + day.slice(1)}
              </Option>
            )}
          </Select>
        </WeekDaySelect>

        <TimeSelect>
          <Select name="startTime" onChange={this.handleStartTimeChange}>
            {time.map(t => this.generateTimeOption(t))}
          </Select>
        </TimeSelect>

        <TimeSelect>
          <Select name="endTime" onChange={this.handleEndTimeChange}>
            {time.map(t => this.generateEndTimeOption(t))}
          </Select>
        </TimeSelect>

        <HoursSelectButtonWrapper>
          <Button
            small
            secondary
            onClick={this.handleAddHours}
          >
            add
          </Button>
        </HoursSelectButtonWrapper>
      </HoursSelectContainer>
    );
  }
}

export default HoursSelect;
