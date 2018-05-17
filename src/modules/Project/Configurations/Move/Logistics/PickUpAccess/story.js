import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import DeliveryAccess from './';

const Demo = withInfo('Delivery Access Selection')(() =>
  <DeliveryAccess
    onChange={action('changed')}
    value="stairs | 3"
    label="Delivery access"
  />
);


const Story = storiesOf('Project/Configurations/Move/Logistics/DeliveryAccess', module)
.addDecorator(withKnobs)
.add('Demo', Demo);


export default Story;
