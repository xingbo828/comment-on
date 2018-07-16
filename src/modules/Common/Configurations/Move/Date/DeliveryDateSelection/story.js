import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import DeliveryDateSelection from './';

const DeliveryDateSelectionDemo = withInfo('Date Selection')(() =>
<div style={{padding: '25px'}}>
  <DeliveryDateSelection
    label="When do you want to move?"
    onChange={action('Date changed')}
  />
</div>
);


const DeliveryDateSelectionStory = storiesOf('Project/Configurations/Move/Date/DeliveryDateSelection', module)
.addDecorator(withKnobs)
.add('Usage', DeliveryDateSelectionDemo);


export default DeliveryDateSelectionStory;
