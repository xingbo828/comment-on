import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import CrewMemberManagement from './';



const CrewMemberManagementDemo = withInfo('Vehicles Info Management Component')(() =>
  <CrewMemberManagement
    members={[]}
    onUpdate={action('changed')}
  />
);


const CrewMemberManagementStory = storiesOf('Mover/CrewMemberManagement', module)
.addDecorator(withKnobs)
.add('Usage', CrewMemberManagementDemo);


export default CrewMemberManagementStory;