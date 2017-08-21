import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import Moment from 'moment';
import {
  TimeContainer,
  TimeSelection,
  TimeSelectionDisplay,
  TimeSelectionHour,
  TimeSelectionMin,
  TimeChangeBtnWrapper,
  TimeChangeBtnInc,
  TimeChangeBtnDec,
  DoneBtnWrapper
} from './Styled';

import Button from '../Button';

class Time extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDisplayTime: this.props.selectedTime
    };
    this.increaseHr = this.increaseHr.bind(this);
    this.increaseMin = this.increaseMin.bind(this);
    this.decreaseHr = this.decreaseHr.bind(this);
    this.decreaseMin = this.decreaseMin.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.selectedTime ) {
      this.setState({
        currentDisplayTime: nextProps.selectedTime,
      });
    }
  }


  increaseHr(e) {
    e.preventDefault();
    this.setState({
      currentDisplayTime: this.state.currentDisplayTime.clone().add(1, 'hour')
    });
  }
  increaseMin(e) {
    e.preventDefault();
    this.setState({
      currentDisplayTime: this.state.currentDisplayTime.clone().add(1, 'minute')
    });
  }
  decreaseHr(e) {
    e.preventDefault();
    this.setState({
      currentDisplayTime: this.state.currentDisplayTime.clone().subtract(1, 'hour')
    });
  }
  decreaseMin(e) {
    e.preventDefault();
    this.setState({
      currentDisplayTime: this.state.currentDisplayTime.clone().subtract(1, 'minute')
    });
  }

  setTime(e) {
    e.preventDefault();
    this.props.onSelectionComplete(this.state.currentDisplayTime);
  }

  render() {
    const { visible } = this.props;
    const { currentDisplayTime } = this.state;
    return (
      <TimeContainer visible={visible}>
        <TimeSelection>
          <TimeSelectionHour>
            <TimeChangeBtnWrapper>
              <TimeChangeBtnInc onClick={this.increaseHr} />
            </TimeChangeBtnWrapper>
            <TimeSelectionDisplay>{currentDisplayTime.format('HH')}</TimeSelectionDisplay>
            <TimeChangeBtnWrapper>
              <TimeChangeBtnDec onClick={this.decreaseHr} />
            </TimeChangeBtnWrapper>
          </TimeSelectionHour>
          <TimeSelectionMin>
            <TimeChangeBtnWrapper>
              <TimeChangeBtnInc onClick={this.increaseMin}/>
            </TimeChangeBtnWrapper>
            <TimeSelectionDisplay>{currentDisplayTime.format('mm')}</TimeSelectionDisplay>
            <TimeChangeBtnWrapper>
              <TimeChangeBtnDec onClick={this.decreaseMin}/>
            </TimeChangeBtnWrapper>
          </TimeSelectionMin>
        </TimeSelection>
        <DoneBtnWrapper>
          <Button primary onClick={this.setTime}>Save</Button>
        </DoneBtnWrapper>
      </TimeContainer>
    );
  }
}

Time.propTypes = {
  selectedTime: instanceOf(Moment)
};
export default Time;
