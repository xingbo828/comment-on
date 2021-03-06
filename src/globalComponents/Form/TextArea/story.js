import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextField from '../../../globalComponents/Form/TextField';
import Layout from '../../../globalComponents/Layout';

const { Form, FormInner } = Layout.Form;

const input = {
  onChange: action('Input changed')
};
const meta = {
  touched: true,
  error: 'oops, something is wrong!'
};
const BasicTextField = withInfo('Basic TextField')(() => (
  <Form>
    <FormInner>
      <TextField
        type="text"
        name="address"
        lable="Address"
        placeholder="Enter your address"
        input={input}
      />
    </FormInner>
  </Form>
));

const TextFieldWithError = withInfo('With error message')(() => (
  <Form>
    <FormInner>
      <TextField
        type="text"
        name="address"
        lable="Address"
        placeholder="Enter your address"
        input={input}
        meta={meta}
      />
    </FormInner>
  </Form>
));

const TextFieldStory = storiesOf('Global/Data Entry/Text Area', module)
  .add('Basic text field', BasicTextField)
  .add('With error message', TextFieldWithError);
export default TextFieldStory;
