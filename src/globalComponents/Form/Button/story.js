import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../../../globalComponents/Form/Button';
import Icon from '../../../globalComponents/Icon';

const BasicButton = withInfo('Basic button')(() => <Button primary>Hello world</Button>);
const DisabledButton = withInfo('Disabled button')(() => <Button disabled>Hello world</Button>);
const DangerButton = withInfo('Danger button')(() => <Button danger>Hello world</Button>);
const SuccessButton = withInfo('Success button')(() => <Button success>Hello world</Button>);
const SmallButtons = withInfo('Small buttons')(() => (
  <div>
    <Button small primary>Hello world</Button>
    <Button small success><Icon icon="plus" /></Button>
    <Button small disabled>Hello world</Button>
  </div>
));

const IconButton = withInfo('With icon')(() =>
  <div>
    <Button disabled>Loading...<Icon icon="refresh" spin /></Button>
    <Button primary>Check out<Icon icon="shopping-cart" /></Button>
    <Button success>Accept<Icon icon="shopping-cart" /></Button>
    <Button><Icon icon="arrow-left"/>Hello world</Button>
    <Button danger>Hello world<Icon icon="arrow-right"/></Button>
</div>
);

const GhostButton = withInfo('With icon')(() =>
<div style={{backgroundColor: 'black', padding: '5rem'}}>
  <Button disabled ghost>Loading...<Icon icon="refresh" spin /></Button>
  <Button primary ghost>Check out<Icon icon="shopping-cart" /></Button>
  <Button success ghost>Accept<Icon icon="shopping-cart" /></Button>
  <Button ghost><Icon icon="arrow-left"/>Hello world</Button>
  <Button danger ghost>Hello world<Icon icon="arrow-right"/></Button>
</div>
);

const ButtonStory = storiesOf('Global/General/Button', module)
  .add('Basic primary button', BasicButton)
  .add('Success button', SuccessButton)
  .add('Danger button', DangerButton)
  .add('Disabled button', DisabledButton)
  .add('Small buttons', SmallButtons)
  .add('With icon', IconButton)
  .add('Ghost buttons', GhostButton);
export default ButtonStory;
