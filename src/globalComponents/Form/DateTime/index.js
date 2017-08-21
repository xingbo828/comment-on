import React, { Component } from 'react';
import moment from 'moment';
import {
  Label,
  LabelTxt,
  InputBtn,
  DateTimeContainer
} from './Styled';

import Calendar from './Calendar';

class DateTime extends Component {
  constructor(props) {
    super(props);
    const m = moment;
    this.state = {
      moment: m,
      isOverlayVisible: false,
      selectedDate: this.props.value ? m(this.props.value) : m(),
      displayValue: this.props.value || this.props.placeholder
    };
    this.handleInputBtnClick = this.handleInputBtnClick.bind(this);
    this.handleSelectionComplete = this.handleSelectionComplete.bind(this);
  }

  handleInputBtnClick(e) {
    e.preventDefault();
    this.setState({
      isOverlayVisible: true
    });
  }


  handleSelectionComplete(value) {
    this.setState({
      isOverlayVisible: false,
      displayValue: value.format('MMM DD, YYYY')
    });
  }

  render() {
    const { label, placeholder } = this.props;
    const { displayValue, isOverlayVisible, moment, selectedDate } = this.state;
    return (
      <Label>
        <LabelTxt>{label}</LabelTxt>
        <InputBtn
          onClick={this.handleInputBtnClick}
          datePicked={displayValue!==placeholder}
        >{displayValue}</InputBtn>
        <DateTimeContainer visible={isOverlayVisible}>
          <Calendar moment={moment} selectedDate={selectedDate} onSelectionComplete={this.handleSelectionComplete}/>
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
