import React from 'react';
import { HoursListItem, HoursListItemText, HoursListItemLink, RemoveLink } from './Styled';
import moment from 'moment';

const HoursDisplayItem = ({ content, removeHours, hourIndex }) => {
  const formatTime = (time) => {
    const hour = Math.floor(time);
    const minute = (time - hour) * 60;
    return moment().hour(time).minutes(minute).format('h:mm a');
  }
  const removeHandler = (e) => {
    e.preventDefault();
    removeHours(hourIndex);
  };
  return (
    <HoursListItem>
      <HoursListItemText>
      {`${content.day[0].toUpperCase() + content.day.slice(1)} ${formatTime(content.startTime)} - ${formatTime(content.endTime)}`}
      </HoursListItemText>
      <HoursListItemLink>
        <RemoveLink href="" onClick={removeHandler}>Remove</RemoveLink>
      </HoursListItemLink>
    </HoursListItem>
  );
};

export default HoursDisplayItem;
