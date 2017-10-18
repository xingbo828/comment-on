import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import VehicleSize from '../../modules/Business/components/SearchVehicleSizeSelection';
import { Radio}  from '../../globalComponents/Form';


const VehicleSizeDemo = withInfo('Business Hours')(() =>{
  return  (<Radio.RadioGroup
    childType="wild"
    label="Select the vehicle that suits your move"
    name="vehicle"
    value="small"
    onChange={action('changed')}>
      <VehicleSize label="Small" value="small" onChange={action('Hours changed')} />
      <VehicleSize label="Medium" value="medium" onChange={action('Hours changed')} />
      <VehicleSize label="Large" value="large" onChange={action('Hours changed')} />
      <VehicleSize label="Extra Large" value="xlarge" onChange={action('Hours changed')} />
    </Radio.RadioGroup>
  );
});


const VehicleSizeStory = storiesOf('Mover/VehicleSize', module)
.addDecorator(withKnobs)
.add('Usage', VehicleSizeDemo);


export default VehicleSizeStory;
