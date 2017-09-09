import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Checkbox from '../../globalComponents/Form/Checkbox';

const input = {
  onChange: action('checkbox changed'),
  value: []
}
const BasicCheckBoxGroup = withInfo('Basic checkbox group')(() =>
  <Checkbox.CheckboxGroup label="Team Players" input={input} name="team">
    <Checkbox.Checkbox value="player-1" label="Player 1" />
    <Checkbox.Checkbox value="player-2" label="Player 2" />
    <Checkbox.Checkbox value="player-3" label="Player 3" disabled />
  </Checkbox.CheckboxGroup>
);

const SingleCheckbox = withInfo('Single checkbox usage')(() =>{
    return <Checkbox.Checkbox
      value="true"
      label="Agree"
      name="serviceAgreement"
      checked
      onChange={action('checked, parent component need to update props')}
    />
  }
);

const CheckBoxStory = storiesOf('Form/Checkbox', module)
  .add('Basic group usage', BasicCheckBoxGroup)
  .add('Single checkbox usage', SingleCheckbox);
export default CheckBoxStory;
