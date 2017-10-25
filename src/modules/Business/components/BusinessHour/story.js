import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import BusinessHour from './';



const BusinessHourDemo = withInfo('Business Hours')(() =>
<div style={{padding: '25px'}}>
  <BusinessHour value={[]} onChange={action('Hours changed')} />
</div>
);


const BusinessHourStory = storiesOf('Mover/BusinessHour', module)
.addDecorator(withKnobs)
.add('Usage', BusinessHourDemo);


export default BusinessHourStory;
