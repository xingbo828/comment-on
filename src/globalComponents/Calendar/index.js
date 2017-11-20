import React, { Component } from 'react';
import moment from 'moment';
import { instanceOf, string, bool, func } from 'prop-types';

import Calendar from './Calendar';

class DateTime extends Component {
  constructor(props) {
    super(props);
    const format = 'MMM DD, YYYY ';
    this.state = {
      selectedDate: this.props.value,
    };
    this.handleInputBtnClick = this.handleInputBtnClick.bind(this);
  }

  handleInputBtnClick(e) {
    e.preventDefault();
    this.setState({
      isOverlayVisible: true
    });
  }

  onSelect = (value) => {
    this.setState({
      selectedDate: value
    });
    this.props.onChange(value);
  }

  render() {
    const { disabledDate } = this.props;
    const { selectedDate } = this.state;
    return (
        <Calendar
          disabledDate={disabledDate}
          selectedDate={selectedDate}
          onSelectionComplete={this.onSelect}
        />
    );
  }
}

DateTime.propTypes = {
  value: instanceOf(moment),
  onChange: func,
  disabledDate: func
};

DateTime.defaultProps = {
  value: moment(),
  disabledDate: () => false
};

export default DateTime;
