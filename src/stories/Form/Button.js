import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../../globalComponents/Form/Button';

const BasicButton = withInfo('Basic button')(() => <Button primary>Hello world</Button>);
const DisabledButton = withInfo('Disabled button')(() => <Button disabled>Hello world</Button>);
const DangerButton = withInfo('Danger button')(() => <Button danger>Hello world</Button>);
const SmallButtons = withInfo('Small buttons')(() => (
  <div>
    <Button small primary>Hello world</Button>
    <Button small danger>Hello world</Button>
    <Button small disabled>Hello world</Button>
  </div>
));

const ButtonStory = storiesOf('Form/Button', module)
  .add('Basic primary button', BasicButton)
  .add('Danger button', DangerButton)
  .add('Disabled button', DisabledButton)
  .add('Small buttons', SmallButtons);
export default ButtonStory;
