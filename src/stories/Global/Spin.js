import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Spin from '../../globalComponents/Spin';


const FullScreenSpinDemo = withInfo('Full Screen Spinner')(() =>
    <Spin.FullScreenSpinner />
);


const SpinStory = storiesOf('Global/Spin', module)
.addDecorator(withKnobs)
.add('full screen spinner', withInfo('Basic usage')(FullScreenSpinDemo));

export default SpinStory;
