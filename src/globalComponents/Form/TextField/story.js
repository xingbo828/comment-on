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
  <div style={{ padding: '100px', maxWidth: '600px', margin: '0 auto' }}>
    <Form>
      <FormInner>
        <TextField
          type="text"
          name="address"
          label="Address"
          placeholder="Enter your address"
          input={input}
        />
      </FormInner>
    </Form>
  </div>
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

const TextFieldStory = storiesOf('Global/Data Entry/TextField', module)
  .add('Basic', BasicTextField)
  .add('WithErrorMessage', TextFieldWithError);
export default TextFieldStory;
