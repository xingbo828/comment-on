import React from 'react';

import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Calendar from './';

const CalendarDemo = withInfo('Full width calendar')(() =>
    <Calendar
      onChange={action('Date selected')}
    />
);



const CalendarStory = storiesOf('Global/Calendar', module)
  .add('Usage', CalendarDemo);

export default CalendarStory;
