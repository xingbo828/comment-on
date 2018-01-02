import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SelectMover from './';

const mockMoversInfo = [
  {
    id: 'c34dac',
    businessName: "Bo's Moving Company",
    estimatePrice: 256
  },
  {
    id: 'x304dac',
    businessName: "Angel’s Moving",
    estimatePrice: 312
  }
];

const SelectMoverDemo = () => (
  <div style={{ maxWidth: 768, margin: '5rem auto' }}>
    <SelectMover moversInfo={mockMoversInfo} />
  </div>
);

const SelectMoverStory = storiesOf(
  'Project/Management/Move/SelectMover',
  module
)
  .addDecorator(withKnobs)
  .add('Demo', SelectMoverDemo);

export default SelectMoverStory;
