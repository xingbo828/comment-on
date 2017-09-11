import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextField from '../../../globalComponents/Form/TextField';

const input = {
  onChange: action('Input changed')
};
const meta = {
  touched: true,
  error: 'oops, something is wrong!'
};
const BasicTextField = withInfo('Basic TextField')(() =>
  <TextField
    type="text"
    name="address"
    lable="Address"
    placeholder="Enter your address"
    input={input}
  />
);

const TextFieldWithError = withInfo('With error message')(()=>
  <TextField
    type="text"
    name="address"
    lable="Address"
    placeholder="Enter your address"
    input={input}
    meta={meta}
  />
);

const TextFieldStory = storiesOf('Global/Form/TextField', module)
  .add('Basic text field', BasicTextField)
  .add('With error message', TextFieldWithError);
export default TextFieldStory;
