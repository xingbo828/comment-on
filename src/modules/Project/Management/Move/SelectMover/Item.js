import React from 'react';
import Badge from '../../../../../globalComponents/Badge';
import { Radio } from '../../../../../globalComponents/Form';
import {
  SelectMoverListItem,
  SelectMoverListItemName,
  SelectMoverListItemEst,
  SelectMoverListItemAction,
  StyledLink
} from './Styled';

const SelectMoverItem = ({ value, moverInfo, unreadMsgsCount, checked, onCheck }) => {
  return (
    <SelectMoverListItem checked={checked}>
      <Radio.Radio value={value} checked={checked} onCheck={onCheck } />
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
      </SelectMoverListItemAction>
    </SelectMoverListItem>
  );
};


export default SelectMoverItem;
