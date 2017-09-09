import React from 'react';

import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DateTime from '../../globalComponents/Form/DateTime';

const DateOnly = withInfo('Date only')(() =>
  <div style={{width: '300px'}}>
    <DateTime
      name="date"
      lable="Date"
      placeholder="Select date"
      includeTime={false}
      onSelect={action('Date selected')}
    />
  </div>
);

const DateAndTime = withInfo('Date and time')(() =>
  <div style={{width: '300px'}}>
    <DateTime
      name="datetime"
      lable="Date and time"
      includeTime={true}
      placeholder="Select date & time"
      onSelect={action('Datetime selected')}
    />
  </div>
);
const disabledDate = (date) => {
  return date.diff(moment(), 'days') < 1 ;
};

const DateWithDisabledDates = withInfo('Date and time with disabled dates')(() =>
<div style={{width: '300px'}}>
  <DateTime
    name="datetime"
    lable="Date and time"
    includeTime={false}
    placeholder="Select date "
    onSelect={action('Date selected')}
    disabledDate={disabledDate}
  />
</div>
);

const DateTimeStory = storiesOf('Form/DateTime', module)
  .add('Date only', DateOnly)
  .add('With disabled dates', DateWithDisabledDates)
  .add('With time', DateAndTime);
export default DateTimeStory;
