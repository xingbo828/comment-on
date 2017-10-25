import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Rate from '../../globalComponents/Rate';

const RateDemo = withInfo('Default Rate')(() =>
  <div style={{padding: '25px'}}>
    <Rate
      value={2.5}
      onChange={action('Rate changed')}
      readOnly={boolean('readonly', false)}
    />
  </div>
);

const RateWithCustomIcon = withInfo('Rate with custom icon')(() =>
  <div style={{padding: '25px'}}>
    <Rate
      icon="heart"
      size="lg"
      value={3.2}
      onChange={action('Rate changed')}
      readOnly={false}
    />
  </div>
);


const RateStory = storiesOf('Global/Rate', module)
.addDecorator(withKnobs)
.add('Basic rate', RateDemo)
.add('Rate with custom icon', RateWithCustomIcon);

export default RateStory;
