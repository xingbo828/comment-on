import React from 'react';
import { HoursList } from './Styled';
import HoursDisplayItem from './HoursDisplayItem';

const HoursDisplay = ({ hoursList, removeHours }) => {
  return (
    <HoursList>
      {hoursList.map((item, index) => <HoursDisplayItem removeHours={removeHours} hourIndex={index} key={index} content={item} />)}
    </HoursList>
  );
};

export default HoursDisplay;
