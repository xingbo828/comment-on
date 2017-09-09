import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import message from '../globalComponents/Message';
import Button from '../globalComponents/Form/Button';


const MessageDemo = () => {
  const triggerSuccessMsg = () => {
    message.success(<p>hello world</p>);
  }

  return (
    <div style={{padding: '200px 0 0 50px', width: '300px'}}>
      <Button primary small onClick={triggerSuccessMsg}>Success</Button>
    </div>
  );
}

const MessageStory = storiesOf('Message', module)
.add('messages', MessageDemo);

export default MessageStory;
