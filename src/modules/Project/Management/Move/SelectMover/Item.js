import React from 'react';
import {
  Button
} from '../../../../../globalComponents/Form';
import Badge from '../../../../../globalComponents/Badge';
import {
  SelectMoverListItem,
  SelectMoverListItemName,
  SelectMoverListItemEst,
  SelectMoverListItemAction,
  StyledLink
} from './Styled';

const SelectMoverItem = ({ moverInfo, unreadMsgsCount }) => {
  return (
    <SelectMoverListItem>
      <SelectMoverListItemName>
        {moverInfo.provider.businessName}
      </SelectMoverListItemName>
      <SelectMoverListItemEst>
        ${moverInfo.estimatedPrice}
      </SelectMoverListItemEst>
      <SelectMoverListItemAction>
          <Badge count={unreadMsgsCount} offsetX={8} offsetY={-3}>
            <StyledLink to={`/conversation/${moverInfo.conversation.id}`}>Messages</StyledLink>
          </Badge>
          <StyledLink to={`/mover/profile/${moverInfo.provider.id}`}>View profile</StyledLink>
          <Button small success>Accept</Button>
      </SelectMoverListItemAction>
    </SelectMoverListItem>
  );
};

export default SelectMoverItem;
