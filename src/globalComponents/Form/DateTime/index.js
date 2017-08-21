import React, { Component } from 'react';
import moment from 'moment';
import {
  Label,
  LabelTxt,
  Input,
  DateTimeContainer
} from './Styled';

import Calendar from './Calendar';

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverlayVisible: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
  }

  handleInputFocus() {
    this.setState({
      isOverlayVisible: true
    });
  }

  render() {
    const { value, label, placeholder } = this.props;
    return (
      <Label>
        <LabelTxt>{label}</LabelTxt>
        <Input onFocus={this.handleInputFocus} readonly placeholder={placeholder} value={value} />
        <DateTimeContainer visible={this.state.isOverlayVisible}>
          <Calendar />
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
