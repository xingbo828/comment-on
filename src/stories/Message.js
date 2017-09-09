import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import message from '../globalComponents/Message';
import Button from '../globalComponents/Form/Button';


const MessageDemo = () => {
  const messageSuccess = () => {
    message.success('this is success message', 3);
  }
  return (
    <div style={{padding: '200px 0 0 50px', width: '500px'}}>
      <Button primary small onClick={()=>{message.success('this is success message', 3)}}>Success</Button>
      <Button small onClick={()=>{message.info('this is info message', 3)}}>Info</Button>
      <Button danger small onClick={()=>{message.error('this is error message', 3)}}>Error</Button>
    </div>
  );
}

const MessageStory = storiesOf('Message', module)
.add('messages', withInfo({
  text:
  `
    message.success(messageString, duration=3)
    message.info(messageString, duration=3)
    message.error(messageString, duration=3)

    duration=0 => no auto remove
  `,
  propTables: false
})(MessageDemo));

export default MessageStory;
