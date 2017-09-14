import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Switch from '../../../globalComponents/Form/Switch';

const SwitchDemo= withInfo('Basic checkbox group')(() =>
  <div style={{padding: '25px'}}>
    <p><label>Regular switch : <Switch onChange={action('toggled')}/></label></p>
    <p><label>Small switch : <Switch onChange={action('toggled')} size="small"/></label></p>
  </div>
);


const SwitchStory = storiesOf('Global/Form/Switch', module)
  .add('Basic usage', SwitchDemo);
export default SwitchStory;
