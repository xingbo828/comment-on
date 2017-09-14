import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Rate from '../../globalComponents/Rate';

const RateDemo = withInfo('Badge as a dot')(() =>
  <div style={{padding: '25px'}}>
    <Rate />
  </div>
);


const RateStory = storiesOf('Global/Rate', module)
.addDecorator(withKnobs)
.add('Usage', RateDemo);
export default RateStory;
