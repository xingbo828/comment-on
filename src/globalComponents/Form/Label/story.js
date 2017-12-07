import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Label, SubLabel } from '../../../globalComponents/Form';

const Labels = () =>
  <div>
    <Label>
      Email
    </Label>
    <SubLabel>What is your email?</SubLabel>
  </div>;


const LabelsStory = storiesOf('Global/Data Display/Label', module)
  .add('Labels', Labels);

export default LabelsStory;
