import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Heading, Paragraph } from '../../globalComponents/Typography';

const HeadingDemo = () => (
  <div>
    <Heading wrapperTag="h1" underline>
      Hello world
    </Heading>
    <Heading wrapperTag="h2">Hello world</Heading>
    <Heading wrapperTag="h3">Hello world</Heading>
  </div>
);

const ParagraphDemo = () => (
  <div style={{padding: '0 25px'}}>
    <Paragraph>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of the
      word in classical literature, discovered the undoubtable source. Lorem Ipsum
      comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
      (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
      in section 1.10.32.
    </Paragraph>
  </div>
);

const TypographyStory = storiesOf('Global/General/Typography', module)
  .add('Heading', withInfo('Heading')(HeadingDemo))
  .add('Paragraph', withInfo('Paragraph')(ParagraphDemo));

export default TypographyStory;
