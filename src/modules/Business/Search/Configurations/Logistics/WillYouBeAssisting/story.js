import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import WillYouBeAssisting from './';

const Demo = withInfo('Will You Be Assisting Selection')(() =>
  <WillYouBeAssisting
    onChange={action('changed')}
    value="yes"
    label="Will you be assisting?"
  />
);


const Story = storiesOf('Mover/Search/Logistics/WillYouBeAssisting', module)
.addDecorator(withKnobs)
.add('Usage', Demo);


export default Story;
