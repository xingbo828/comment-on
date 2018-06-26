import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import TimeSelection from './';

const TimeSelectionDemo = withInfo('Search Time Range Selection')(() => {
  return <TimeSelection value="" onChange={action('changed')} />;
});

const TimeSelectionStory = storiesOf('Project/Configurations/Move/Date/TimeSelection', module)
  .addDecorator(withKnobs)
  .add('Usage', TimeSelectionDemo);

export default TimeSelectionStory;
