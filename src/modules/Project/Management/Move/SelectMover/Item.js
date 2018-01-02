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

const SelectMoverItem = ({ moverInfo }) => {
  return (
    <SelectMoverListItem>
      <SelectMoverListItemName>
        {moverInfo.businessName}
      </SelectMoverListItemName>
      <SelectMoverListItemEst>
        ${moverInfo.estimatePrice}
      </SelectMoverListItemEst>
      <SelectMoverListItemAction>
          <Badge count={2} offsetX={8} offsetY={-3}>
            <StyledLink to={`/mover/profile/${moverInfo.id}`}>Messages</StyledLink>
          </Badge>
          <StyledLink to={`/mover/profile/${moverInfo.id}`}>View profile</StyledLink>
          <Button small success>Accept</Button>
      </SelectMoverListItemAction>
    </SelectMoverListItem>
  );
};

export default SelectMoverItem;
