import React, { Component } from 'react';
import moment from 'moment';
import { instanceOf, string, bool, func } from 'prop-types';
import { Label, InputBtn, DateTimeContainer } from './Styled';

import Calendar from './Calendar';
import Time from './Time';

class DateTime extends Component {
  constructor(props) {
    super(props);
    const m = moment;
    const getCurrentDateTime = inclueTime => {
      if (inclueTime) {
        return m()
          .add(1, 'hour')
          .minute(0);
      }
      return m()
        .hour(0)
        .minute(0)
        .second(0);
    };
    const format = this.props.includeTime
      ? 'MMM DD, YYYY HH:mm'
      : 'MMM DD, YYYY ';
    this.state = {
      isOverlayVisible: false,
      selectedDateTime:
        this.props.value || getCurrentDateTime(this.props.includeTime),
      displayValue: this.props.value
        ? this.props.value.format(format)
        : this.props.placeholder,
      userInteractionPhase: 'calendar',
      format
    };
    this.handleInputBtnClick = this.handleInputBtnClick.bind(this);
    this.handleCalendarSelectionComplete = this.handleCalendarSelectionComplete.bind(
      this
    );
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.hideDateTimeContainer = this.hideDateTimeContainer.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleTimeSelectionComplete = this.handleTimeSelectionComplete.bind(
      this
    );
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleInputBtnClick(e) {
    e.preventDefault();
    this.setState({
      isOverlayVisible: true
    });
  }

  handleCalendarSelectionComplete(value) {
    if (!this.props.includeTime) {
      this.setState({
        isOverlayVisible: false,
        displayValue: value.format(this.state.format)
      });
      this.props.onChange(value);
    } else {
      this.setState({
        selectedDateTime: value,
        displayValue: value.format(this.state.format),
        userInteractionPhase: 'time'
      });
    }
  }

  handleTimeSelectionComplete(value) {
    this.setState({
      displayValue: value.format(this.state.format),
      isOverlayVisible: false,
      userInteractionPhase: 'calendar'
    });
    this.props.onChange(value);
  }

  handleClickOutside(event) {
    if (
      this.state.isOverlayVisible &&
      this.dateTimeContainer &&
      !this.dateTimeContainer.contains(event.target)
    ) {
      this.hideDateTimeContainer();
    }
  }

  handleEscape(event) {
    if (this.state.isOverlayVisible && event.code === 'Escape') {
      this.hideDateTimeContainer();
    }
  }

  hideDateTimeContainer() {
    this.setState({
      isOverlayVisible: false,
      userInteractionPhase: 'calendar'
    });
  }

  render() {
    const { placeholder, includeTime, disabledDate } = this.props;
    const {
      userInteractionPhase,
      displayValue,
      isOverlayVisible,
      selectedDateTime
    } = this.state;

    return (
      <Label>
        <InputBtn
          onClick={this.handleInputBtnClick}
          onFocus={this.handleInputBtnClick}
          datePicked={displayValue !== placeholder}
        >
          {displayValue}
        </InputBtn>
        <DateTimeContainer
          visible={isOverlayVisible}
          innerRef={container => (this.dateTimeContainer = container)}
        >
          <Calendar
            visible={userInteractionPhase === 'calendar'}
            disabledDate={disabledDate}
            selectedDate={selectedDateTime}
            onSelectionComplete={this.handleCalendarSelectionComplete}
          />
          {includeTime && (
            <Time
              visible={userInteractionPhase === 'time'}
              selectedTime={selectedDateTime}
              onSelectionComplete={this.handleTimeSelectionComplete}
            />
          )}
        </DateTimeContainer>
      </Label>
    );
  }
}

DateTime.propTypes = {
  value: instanceOf(moment),
  placeholder: string,
  includeTime: bool,
  onChange: func,
  disabledDate: func
};

DateTime.defaultProps = {
  value: null,
  placeholder: 'Date & time',
  includeTime: false,
  disabledDate: () => false
};

export default DateTime;
