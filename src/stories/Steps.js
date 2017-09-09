import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Steps from '../globalComponents/Steps';
import Icon from '../globalComponents/Icon';

const Step = Steps.Step;

const StepsDemo = () => (
  <div style={{width: '500px'}}>
    <Steps current={number('curent', 1)}>
      <Step
        icon={<Icon icon="sign-in" />}
        title="Login"
        onStepClick={action('Login clicked')}
      />
      <Step
        icon={<Icon icon="id-card-o" />}
        title="Verification"
        onStepClick={action('Verification clicked')}
      />
      <Step
        icon={<Icon icon="shopping-cart" />}
        title="Pay"
        onStepClick={action('Pay clicked')}
      />
      <Step
        icon={<Icon icon="smile-o" />}
        title="Done"
        onStepClick={action('Done clicked')}
      />
    </Steps>
  </div>
);

const StepsStory = storiesOf('Steps', module)
.addDecorator(withKnobs)
.add('Steps', withInfo('Default')(StepsDemo));

export default StepsStory;
