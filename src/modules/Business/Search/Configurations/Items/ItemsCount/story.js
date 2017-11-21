import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ItemsCount from './';

const Demo = withInfo('Items Count')(() =>
  <ItemsCount
    onChange={action('changed')}
    value="test"
    label="Speciality Items"
  />
);


const Story = storiesOf('Mover/Search/Items/ItemsCount', module)
.addDecorator(withKnobs)
.add('Usage', Demo);


export default Story;
