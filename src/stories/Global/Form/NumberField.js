import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import NumberField from '../../../globalComponents/Form/NumberField';

const input = {
  onChange: action('Input changed')
};
const meta = {
  touched: true,
  error: 'oops, something is wrong!'
};
const BasicNumberField = withInfo('Basic NumberField')(() =>
  <NumberField
    type="text"
    name="address"
    lable="Address"
    placeholder="Enter your address"
    input={input}
  />
);

const NumberFieldWithError = withInfo('With error message')(()=>
  <NumberField
    type="text"
    name="address"
    lable="Address"
    placeholder="Enter your address"
    input={input}
    meta={meta}
  />
);

const NumberFieldStory = storiesOf('Global/Form/NumberField', module)
  .add('Basic number field', BasicNumberField)
  .add('With error message', NumberFieldWithError);
export default NumberFieldStory;
