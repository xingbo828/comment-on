import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import NumberField from '../../../globalComponents/Form/NumberField';

const input = {
  onChange: action('Input changed')
};
const meta = {
  touched: true,
  error: 'oops, something is wrong!'
};
const BasicNumberField = withInfo('Basic NumberField')(() =>
  <div style={{width: '100px'}}>
  <NumberField
    min={number('min', 0)}
    max={number('max', 10)}
    name="address"
    placeholder="Enter your address"
    input={input}
  />
  </div>
);

const NumberFieldWithError = withInfo('With error message')(()=>
  <div style={{width: '100px'}}>
  <NumberField
    min={number('min', 0)}
    max={number('max', 10)}
    name="address"
    placeholder="Enter your address"
    input={input}
    meta={meta}
  />
  </div>
);

const NumberFieldStory = storiesOf('Global/Form/NumberField', module)
  .addDecorator(withKnobs)
  .add('Basic number field', BasicNumberField)
  .add('With error message', NumberFieldWithError);
export default NumberFieldStory;
