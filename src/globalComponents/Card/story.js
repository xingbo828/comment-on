import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Card from '../../globalComponents/Card';


const BasicCard = () => (
  <div style={{margin: '0 auto', padding: '200px 0', width: '200px'}}>
    <Card>
      <p>Hello world</p>
    </Card>
  </div>
);
const IconStory = storiesOf('Global/Card', module)
  .add('basic card', withInfo('Basic usage')(BasicCard));

export default IconStory;
