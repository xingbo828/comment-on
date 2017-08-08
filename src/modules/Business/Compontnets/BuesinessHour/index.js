import React, { Component } from 'react';
import HoursDisplay from './HoursDisplay';
import HoursSelect from './HoursSelect';
import { BusinessHourContainer, BusinessHourHeading } from './Styled';
import { weekdays } from './constants';

class BusinessHour extends Component {

  constructor(){
    super();
    this.state = {
      hoursList: []
    };
    this.addHours = this.addHours.bind(this);
    this.removeHours = this.removeHours.bind(this);
  }

  addHours(hours) {
    this.setState({
      hoursList: this.state.hoursList.concat([hours]).sort((a, b) => {
        const dayIndexOfA = weekdays.findIndex(day => day === a.day);
        const dayIndexOfB = weekdays.findIndex(day => day === b.day);
        return dayIndexOfA > dayIndexOfB;
      })
    });
  }

  removeHours(key) {
    this.setState({
      hoursList: this.state.hoursList.filter((ele, i) => i!==key)
    });
  }


  render() {
    return (
      <BusinessHourContainer>
        <BusinessHourHeading>Business Hours</BusinessHourHeading>
        <HoursDisplay removeHours={this.removeHours} hoursList={this.state.hoursList}/>
        <HoursSelect addHours={this.addHours}/>
      </BusinessHourContainer>
    );
  }
}

export default BusinessHour;
