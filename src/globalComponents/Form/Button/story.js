import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../../../globalComponents/Form/Button';
import Icon from '../../../globalComponents/Icon';

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

const IconButton = withInfo('With icon')(() =>
  <div>
    <Button disabled>Loading... <Icon icon="refresh" spin /></Button>
    <Button primary>Check out <Icon icon="shopping-cart" /></Button>
    <Button><Icon icon="arrow-left"/> Hello world</Button>
    <Button danger>Hello world <Icon icon="arrow-right"/></Button>
</div>
);

const GhostButton = withInfo('With icon')(() =>
<div style={{backgroundColor: 'rgb(190, 200, 200)', padding: '5rem'}}>
  <Button disabled ghost>Loading... <Icon icon="refresh" spin /></Button>
  <Button primary ghost>Check out <Icon icon="shopping-cart" /></Button>
  <Button ghost><Icon icon="arrow-left"/> Hello world</Button>
  <Button danger ghost>Hello world <Icon icon="arrow-right"/></Button>
</div>
);

const ButtonStory = storiesOf('Global/Form/Button', module)
  .add('Basic primary button', BasicButton)
  .add('Danger button', DangerButton)
  .add('Disabled button', DisabledButton)
  .add('Small buttons', SmallButtons)
  .add('With icon', IconButton)
  .add('Ghost buttons', GhostButton);
export default ButtonStory;
