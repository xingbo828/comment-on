import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Spin from '../../globalComponents/Spin';

const FullScreenSpinDemo = withInfo('Full Screen Spinner')(() => (
  <Spin.FullScreenSpinner delay={300} />
));

const ContainerModeDemo = withInfo('Spinner in container mode')(() => (
  <div style={{margin: '20px', width: '400px'}}>
    <Spin.SpinContainer loading={boolean('loading', true)}>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </Spin.SpinContainer>
  </div>
));

const SpinStory = storiesOf('Global/Spin', module)
  .addDecorator(withKnobs)
  .add('full screen spinner', withInfo('fullscreen')(FullScreenSpinDemo))
  .add('spinner as container', withInfo('container mode')(ContainerModeDemo));

export default SpinStory;
