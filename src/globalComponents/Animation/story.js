import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import { Paragraph } from '../Typography';

import Animation from './';

const textHolder = `Contrary to popular belief, Lorem Ipsum is not simply random text. It
has roots in a piece of classical Latin literature from 45 BC, making it
over 2000 years old. Richard McClintock, a Latin professor at
Hampden-Sydney College in Virginia, looked up one of the more obscure
Latin words, consectetur, from a Lorem Ipsum passage, and going through
the cites of the word in classical literature, discovered the
undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
Cicero, written in 45 BC. This book is a treatise on the theory of
ethics, very popular during the Renaissance. The first line of Lorem
Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
1.10.32.`;

const FadeDemo = () => (
  <Animation.Fade timeout={number('timeout', 300)} in={boolean('In', true)}>
    {() => (
      <Paragraph>
        {textHolder}
      </Paragraph>
    )}
  </Animation.Fade>
);

const RevealDemo = () => (
  <Animation.Reveal timeout={number('timeout', 300)} height={200} in={boolean('In', true)}>
    {() => (
      <Paragraph>
        {textHolder}
      </Paragraph>
    )}
  </Animation.Reveal>
);

const TranslateDemo = () => (
  <Animation.Translate
    distance={text('distance', '-10rem')}
    direction={text('direction', 'x')}
    timeout={number('timeout', 300)}
    in={boolean('In', true)}
  >
    {() => (
      <Paragraph>
        {textHolder}
      </Paragraph>
    )}
  </Animation.Translate>
);

const ScaleDemo = () => (
  <Animation.Scale
    abscissa={number('abscissa', 1)}
    ordinate={number('ordinate', 1)}
    timeout={number('timeout', 500)}
    timingFunction={text('timing function', 'cubic-bezier(0.720, -0.600, 0.370, 1.650)')}
    in={boolean('In', true)}
  >
    {() => (
      <Paragraph>
        {textHolder}
      </Paragraph>
    )}
  </Animation.Scale>
);


const AnimationStory = storiesOf('Global/Animation', module)
  .addDecorator(withKnobs)
  .add('Fade', FadeDemo)
  .add('Reveal', RevealDemo)
  .add('Translate', TranslateDemo)
  .add('Scale', ScaleDemo);
export default AnimationStory;
