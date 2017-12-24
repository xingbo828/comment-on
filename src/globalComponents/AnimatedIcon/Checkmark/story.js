import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AnimatedCheckmark from './';


const AnimatedCheckmarkDemo = () => <AnimatedCheckmark style={{width: 150}}/>;

const IconStory = storiesOf('Global/Feedback/Animation Icons/Checkmark', module)
  .add('Demo', AnimatedCheckmarkDemo);

export default IconStory;
