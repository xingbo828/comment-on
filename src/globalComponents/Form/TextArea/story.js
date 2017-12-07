import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextArea from '../../../globalComponents/Form/TextArea';
import Layout from '../../../globalComponents/Layout';

const { Form, FormInner } = Layout.Form;

const input = {
  onChange: action('Input changed')
};
const meta = {
  touched: true,
  error: 'oops, something is wrong!'
};
const BasicTextArea = withInfo('Basic TextArea')(() => (
  <Form>
    <FormInner>
      <TextArea
        name="desc"
        label="Description"
        placeholder="Talk about yourself"
        input={input}
      />
    </FormInner>
  </Form>
));

const TextAreaWithError = withInfo('With error message')(() => (
  <Form>
    <FormInner>
      <TextArea
        name="desc"
        label="Description"
        placeholder="Talk about yourself"
        input={input}
        meta={meta}
      />
    </FormInner>
  </Form>
));

const TextAreaStory = storiesOf('Global/Data Entry/TextArea', module)
  .add('Basic textarea', BasicTextArea)
  .add('With error message', TextAreaWithError);
export default TextAreaStory;
