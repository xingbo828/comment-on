import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Badge from '../../globalComponents/Badge';
import Avatar from '../../globalComponents/Avatar';

const DotBadge = withInfo('Badge as a dot')(() =>
  <div style={{padding: '25px'}}>
    <Badge dot={boolean('dot', true)}>
      <Avatar style={{backgroundColor: '#87d068', color: 'white'}} icon="user-o" />
    </Badge>
  </div>
);

const NumberBadge = withInfo('Badge with counter')(() =>
  <div style={{padding: '25px'}}>
    <Badge count={number('count', 1)}>
      <Avatar style={{backgroundColor: '#87d068', color: 'white'}} icon="user-o" />
    </Badge>
  </div>
);


const BadgeStory = storiesOf('Global/Badge', module)
.addDecorator(withKnobs)
.add('Dot badge', DotBadge)
.add('Number badge', NumberBadge);
export default BadgeStory;
