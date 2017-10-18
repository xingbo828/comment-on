import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import NumberField from '../../../globalComponents/Form/NumberField';

const BasicNumberField = withInfo('Basic NumberField')(() =>
  <div style={{width: '100px'}}>
    <NumberField
      min={number('min', 0)}
      max={number('max', 10)}
      name="address"
      placeholder="Enter your address"
      onChange={action('Input changed')}
    />
  </div>
);


const NumberFieldStory = storiesOf('Global/Form/NumberField', module)
  .addDecorator(withKnobs)
  .add('Basic number field', BasicNumberField);
export default NumberFieldStory;
