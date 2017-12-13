import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';
import ItemsCount from './';
import configs from './configs';

const value = {
  stuidoPiano: 1,
  uprightPiano: 4,
  chandelier: 3
};

const Demo = withInfo('Items Count')(() =>
  <ItemsCount
    onChange={action('changed')}
    value={value}
    label="Speciality Items"
    configs={configs.speciality}
    desc="Anything that doesn't fit in a regular size sedan."
  />
);


const Story = storiesOf('Project/Configurations/Move/Items/ItemsCount', module)
.addDecorator(withKnobs)
.add('Usage', Demo);


export default Story;
