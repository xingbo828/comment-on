import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import message from '../../globalComponents/Message';
import Button from '../../globalComponents/Form/Button';

const triggerLoadingMessage = () => {
  const messageKey = message.loading('this message will be removed in 3s');
  setTimeout(() => {
    message.remove(messageKey);
  }, 3000);
};
const MessageDemo = () => {
  return (
    <div style={{padding: '200px 0 0 50px', width: '500px'}}>
      <Button success small onClick={()=>{message.success('this is success message', 3)}}>Success</Button>
      <Button small onClick={()=>{message.info('this is info message', 3)}}>Info</Button>
      <Button danger small onClick={()=>{message.error('this is error message', 3)}}>Error</Button>
      <Button primary small onClick={triggerLoadingMessage}>Loading</Button>
    </div>
  );
}

const MessageStory = storiesOf('Global/Feedback/Message', module)
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
