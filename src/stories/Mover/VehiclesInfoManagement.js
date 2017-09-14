import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import VehiclesInfoManagement from '../../modules/Business/components/VehiclesInfoManagement';



const VehiclesInfoManagementDemo = withInfo('Vehicles Info Management Component')(() =>
<div style={{padding: '25px'}}>
  <VehiclesInfoManagement
    vehicles={[]}
    onChange={action('Vehicles info changed')}
  />
</div>
);


const VehiclesInfoManagementStory = storiesOf('Mover/VehiclesInfoManagement', module)
.addDecorator(withKnobs)
.add('Usage', VehiclesInfoManagementDemo);


export default VehiclesInfoManagementStory;
