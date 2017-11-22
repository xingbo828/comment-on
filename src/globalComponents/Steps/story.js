import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Steps from '../../globalComponents/Steps';


const Step = Steps.Step;

const StepsDemo = () => (
  <div style={{width: '100%'}}>
    <Steps current={number('curent', 1)}>
      <Step
        title="Login"
        onStepClick={action('Login clicked')}
      />
      <Step
        title="Verification"
        onStepClick={action('Verification clicked')}
      />
      <Step
        title="Pay"
        onStepClick={action('Pay clicked')}
      />
      <Step
        title="Done"
        onStepClick={action('Done clicked')}
      />
    </Steps>
  </div>
);

const StepsStory = storiesOf('Global/Steps', module)
.addDecorator(withKnobs)
.add('Steps', withInfo('Default')(StepsDemo));

export default StepsStory;
