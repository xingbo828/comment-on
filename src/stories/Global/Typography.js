import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Heading from '../../globalComponents/Typography/Heading';

const HeadingDemo = () => (
  <div>
    <Heading wrapperTag="h1" underline>Hello world</Heading>
    <Heading wrapperTag="h2">Hello world</Heading>
    <Heading wrapperTag="h3">Hello world</Heading>
  </div>
);

const TypographyStory = storiesOf('Global/Typography', module)
  .add('Heading', withInfo('Heading')(HeadingDemo));

export default TypographyStory;
