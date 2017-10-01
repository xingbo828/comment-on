import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import DateTimeSelection from '../../modules/Business/components/SearchStepDateTimeSelection';

const DateTimeSelectionDemo = withInfo('DateTime Selection')(() =>
<div style={{padding: '25px'}}>
  <DateTimeSelection
    placeholder="Select date & time"
    label="When do you want to move?"
    value=""
    onChange={action('DateTime changed')}
  />
</div>
);


const DateTimeSelectionStory = storiesOf('Mover/Search/DateTimeSelection', module)
.addDecorator(withKnobs)
.add('Usage', DateTimeSelectionDemo);


export default DateTimeSelectionStory;
