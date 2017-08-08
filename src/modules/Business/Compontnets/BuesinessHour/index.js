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
    const newHoursList = this.state.hoursList.concat([hours]).sort((a, b) => {
      const dayIndexOfA = weekdays.findIndex(day => day === a.day);
      const dayIndexOfB = weekdays.findIndex(day => day === b.day);
      return dayIndexOfA > dayIndexOfB;
    });
    this.setState({
      hoursList: newHoursList
    });

    this.props.input.onChange(newHoursList);
  }

  removeHours(key) {
    const newHoursList = this.state.hoursList.filter((ele, i) => i!==key);
    this.setState({
      hoursList: newHoursList
    });
    this.props.input.onChange(newHoursList);
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
