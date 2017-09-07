import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from '../globalComponents/Icon';

const BasicIcon = () => <Icon icon="user" />;
const ListOfIconsWithDifferenceSize = () => (
  <div>
    <Icon size="lg" icon="user" />
    <Icon size="2x" icon="user" />
    <Icon size="3x" icon="user" />
    <Icon size="5x" icon="user" />
  </div>
);
const IconStory = storiesOf('Icon', module)
  .add('basic icon', withInfo('Basic usage')(BasicIcon))
  .add('with different size',withInfo('Icon with sizes(lg/3x/5x)')(ListOfIconsWithDifferenceSize));

export default IconStory;
