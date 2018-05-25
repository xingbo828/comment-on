import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ProviderCard from './ProviderCard';
import { Radio, Button } from '../../globalComponents/Form';
import { Link } from '../../globalComponents/Link';
import Icon from '../../globalComponents/Icon';


const PrimaryAction = () => (
  <Button>Select&nbsp;&nbsp;<Icon icon="arrow-right"/></Button>
)

const SecondaryAction = () => (
  <Link secondary to="/test" >View profile</Link>
)

const Usage = () => (
  <div
  style={{
    width: '250px',
    margin: '2rem'
  }}>
    <ProviderCard 
      estimate={456.80}
      primaryAction={PrimaryAction()}
      secondaryAction={SecondaryAction()}
    />
  </div>
);

const ProviderCardStory = storiesOf('Global/Data Display/Provider Card', module)
  .addDecorator(withKnobs)
  .add('Basic usage', Usage)

export default ProviderCardStory;
