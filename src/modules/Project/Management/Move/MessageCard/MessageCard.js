import React from 'react';

import Card from '../../../../../globalComponents/Card';
import Badge from '../../../../../globalComponents/Badge';

import MessageCardItem from './MessageCardItem';
import {
  MessageCardContainer,
  CardHeader,
  CardHeaderInner,
  CardHeaderTitle,
  CardHeaderUnread,
  CardBody
} from './Styled';

const MessageCard = ({ projectId, projectUnread, receivers }) => {
  return (
    <MessageCardContainer>
      <Card>
        <CardHeader>
          <CardHeaderInner>
            <CardHeaderTitle>Messages</CardHeaderTitle>
            {projectUnread > 0 && <CardHeaderUnread>
              <Badge offsetX={15} offsetY={3} count={projectUnread}>
                UNREAD
              </Badge>
            </CardHeaderUnread>}
          </CardHeaderInner>
        </CardHeader>
        <CardBody>
          {
            receivers.map(r => <MessageCardItem projectId={projectId} receiver={r} key={r.id} />)
          }
        </CardBody>
      </Card>
    </MessageCardContainer>
  );
};

export default MessageCard;
