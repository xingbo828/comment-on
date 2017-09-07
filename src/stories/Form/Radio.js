import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Radio from '../../globalComponents/Form/Radio';

const BasicRadioGroup = withInfo('Basic radio group')(() =>
  <Radio.RadioGroup value="male" onChange={action('changed')}>
    <Radio.Radio value="male" label="Male" />
    <Radio.Radio value="female" label="Female" />
  </Radio.RadioGroup>
);

const RadioStory = storiesOf('Form/Radio', module)
  .add('Basic usage', BasicRadioGroup);
export default RadioStory;
