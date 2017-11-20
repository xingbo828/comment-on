import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ResidenceTypeSelection from './';

const Demo = withInfo('ResidenceType Selection')(() =>
  <ResidenceTypeSelection
    onChange={action('changed')}
    value="condo | 1000 sqft"
    label="Pick-up residence"
  />
);


const DateSelectionStory = storiesOf('Mover/Search/ResidenceTypeSelection', module)
.addDecorator(withKnobs)
.add('Usage', Demo);


export default DateSelectionStory;
