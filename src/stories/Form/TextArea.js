import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextArea from '../../globalComponents/Form/TextArea';

const input = {
  onChange: action('Input changed')
};
const meta = {
  touched: true,
  error: 'oops, something is wrong!'
};
const BasicTextArea = withInfo('Basic TextArea')(() =>
  <TextArea
    type="text"
    name="address"
    lable="Address"
    placeholder="Enter your address"
    input={input}
  />
);

const TextAreaWithError = withInfo('With error message')(()=>
  <TextArea
    type="text"
    name="address"
    lable="Address"
    placeholder="Enter your address"
    input={input}
    meta={meta}
  />
);

const TextAreaStory = storiesOf('Form/TextArea', module)
  .add('Basic text Area', BasicTextArea)
  .add('With error message', TextAreaWithError);
export default TextAreaStory;
