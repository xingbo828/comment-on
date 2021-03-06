import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Select from './';


const SelectDemo= withInfo('Basic checkbox group')(() =>
  <div style={{padding: '25px'}}>
    <Select label="test" value="option3" name="test" onChange={action('changed')}>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </Select>
  <br/>
    <Select size="sm">
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </Select>
  </div>
);


const SelectStory = storiesOf('Global/Data Entry/Select', module)
  .add('Basic usage', SelectDemo);
export default SelectStory;
