import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import VehicleSize from './';
import { Radio }  from '../../../../globalComponents/Form';


const VehicleSizeDemo = withInfo('Business Hours')(() =>{
  return  (
    <VehicleSize value="medium" onChange={action('changed')}/>
  );
});


const VehicleSizeStory = storiesOf('Mover/Search/VehicleSize', module)
.addDecorator(withKnobs)
.add('Usage', VehicleSizeDemo);


export default VehicleSizeStory;
