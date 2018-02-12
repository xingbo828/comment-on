import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, object } from '@storybook/addon-knobs';
import MessageCard from './MessageCard';

const mockReceivers = [
  {
    id: 'c34dac',
    businessName: "Bo's Moving Company",
    unreadMsgCount: 2,
    conversation: {
      id: 'abc'
    }
  },
  {
    id: 'c34dac',
    businessName: "Nathan's Moving Company",
    unreadMsgCount: 1,
    conversation: {
      id: 'abc'
    }
  },{
    id: 'c34dac',
    businessName: "Will's Moving Company",
    unreadMsgCount: 2,
    conversation: {
      id: 'abc'
    }
  }
];

const MessageCardDemo = () => (
  <div style={{ maxWidth: 300, margin: '5rem auto' }}>
    <MessageCard projectId="abc" projectUnread={number('project unread', 5)} receivers={object('receiver mock', mockReceivers)} />
  </div>
);

const MessageCardStory = storiesOf(
  'Project/Management/Move/MessageCard',
  module
)
  .addDecorator(withKnobs)
  .add('Demo', MessageCardDemo);

export default MessageCardStory;
