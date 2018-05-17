import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Radio from '../../../globalComponents/Form/Radio';
import Card from '../../../globalComponents/Card';

const BasicRadioGroup = withInfo('Basic radio group')(() =>
  <div style={{ padding: '20px' }}>
    <Radio.RadioGroup
      label="Gender"
      name="gender"
      value="male"
      onChange={action('changed')}
    >
      <Radio.Radio value="male" label="Male" color="#1d407f"/>
      <Radio.Radio value="female" label="Female" />
    </Radio.RadioGroup>
  </div>
);

const RadioBlocksGroup = withInfo('Radio blocks in group')(() => {
  const placeholdertext = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`;
  return  (
    <div style={{ padding: '20px' }}>
      <Radio.RadioGroup
        childType="wild"
        label="Gender"
        name="gender"
        value="male"
        onChange={action('changed')}
      >
        <Radio.RadioBlock desc={placeholdertext} value="male" label="Male" />
        <Radio.RadioBlock desc={placeholdertext} value="female" label="Female" />
      </Radio.RadioGroup>
    </div>
  )
});

const RadioStory = storiesOf('Global/Data Entry/Radio', module)
  .add('Basic usage', BasicRadioGroup)
  .add('Radio blocks in group', RadioBlocksGroup);
export default RadioStory;
