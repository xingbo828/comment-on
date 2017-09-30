import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Radio from '../../../globalComponents/Form/Radio';
import Card from '../../../globalComponents/Card';

const BasicRadioGroup = withInfo('Basic radio group')(() =>
  <Radio.RadioGroup
    label="Gender"
    name="gender"
    value="male"
    onChange={action('changed')}
  >
    <Radio.Radio value="male" label="Male" />
    <Radio.Radio value="female" label="Female" />
  </Radio.RadioGroup>
);

const CardsRadioGroup = withInfo('Radio group in cards')(() =>
  <Radio.RadioGroup
    label="Gender"
    name="gender"
    value="male"
    onChange={action('changed')}
  >
    <Card offset="0">
      <Radio.Radio value="male" label="Male" />
      <p>Text for male or female</p>
    </Card>
    <Card offset="0">
      <Radio.Radio value="female" label="Female" />
      <p>Text for male or female</p>
    </Card>
  </Radio.RadioGroup>
);

const RadioStory = storiesOf('Global/Form/Radio', module)
  .add('Basic usage', BasicRadioGroup)
  .add('Radio group in cards', CardsRadioGroup);
export default RadioStory;
