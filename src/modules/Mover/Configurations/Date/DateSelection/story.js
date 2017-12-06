import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import DateSelection from './';

const DateSelectionDemo = withInfo('Date Selection')(() =>
<div style={{padding: '25px'}}>
  <DateSelection
    label="Delivery date"
    onChange={action('Date changed')}
  />
</div>
);


const DateSelectionStory = storiesOf('Mover/Configurations/Date/DateSelection', module)
.addDecorator(withKnobs)
.add('Usage', DateSelectionDemo);


export default DateSelectionStory;
