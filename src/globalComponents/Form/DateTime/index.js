import React, { Component } from 'react';
import moment from 'moment';
import {
  Label,
  LabelTxt,
  InputBtn,
  DateTimeContainer
} from './Styled';

import Calendar from './Calendar';
import Time from './Time';

class DateTime extends Component {
  constructor(props) {
    super(props);
    const m = moment;
    this.state = {
      isOverlayVisible: false,
      selectedDateTime: this.props.value || m(),
      displayValue: this.props.value ? this.props.value.format('MMM DD, YYYY HH:mm') : this.props.placeholder,
      userInteractionPhase: 'calendar'
    };
    this.handleInputBtnClick = this.handleInputBtnClick.bind(this);
    this.handleCalendarSelectionComplete = this.handleCalendarSelectionComplete.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.hideDateTimeContainer = this.hideDateTimeContainer.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleTimeSelectionComplete = this.handleTimeSelectionComplete.bind(this);
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
        displayValue: value.format('MMM DD, YYYY HH:mm')
      });
      this.props.onSelect(value);
    } else {
      this.setState({
        selectedDateTime: value,
        displayValue: value.format('MMM DD, YYYY HH:mm'),
        userInteractionPhase: 'time'
      });
    }
  }

  handleTimeSelectionComplete(value) {
    this.setState({
      displayValue: value.format('MMM DD, YYYY HH:mm'),
      isOverlayVisible: false,
      userInteractionPhase: 'calendar'
    });
    this.props.onSelect(value);
  }

  handleClickOutside(event) {
    if (this.state.isOverlayVisible && this.dateTimeContainer && !this.dateTimeContainer.contains(event.target)) {
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
    const { label, placeholder, includeTime } = this.props;
    const {
      userInteractionPhase,
      displayValue,
      isOverlayVisible,
      selectedDateTime
    } = this.state;

    return (
      <Label>
        <LabelTxt>{label}</LabelTxt>
        <InputBtn
          onClick={this.handleInputBtnClick}
          onFocus={this.handleInputBtnClick}
          datePicked={displayValue!==placeholder}
        >{displayValue}</InputBtn>
        <DateTimeContainer
          visible={isOverlayVisible}
          innerRef={container => this.dateTimeContainer = container}
        >
          <Calendar
            visible={userInteractionPhase === 'calendar'}
            selectedDate={selectedDateTime}
            onSelectionComplete={this.handleCalendarSelectionComplete}
          />
          {includeTime && <Time
            visible={userInteractionPhase === 'time'}
            selectedTime={selectedDateTime}
            onSelectionComplete={this.handleTimeSelectionComplete}
          />}
        </DateTimeContainer>
    </Label>
    );
  }
}

DateTime.defaultProps = {
  value: '',
  label: 'Pick date and time',
  placeholder: 'Date & time'
};

export default DateTime;
