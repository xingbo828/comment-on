import React from 'react';
import SelectMoverItem from './Item';
import {
  SelectMoverList,
  SelectMoverListHeading,
  SelectMoverListHeadingName,
  SelectMoverListHeadingEst,
  SelectMoverListHeadingAction
} from './Styled';


const SelectMover = ({ moversInfo }) => {
  return (
    <SelectMoverList>
      <SelectMoverListHeading>
        <SelectMoverListHeadingName>Name</SelectMoverListHeadingName>
        <SelectMoverListHeadingEst>Estimate</SelectMoverListHeadingEst>
        <SelectMoverListHeadingAction>Actions</SelectMoverListHeadingAction>
      </SelectMoverListHeading>
      {moversInfo.map(mover => <SelectMoverItem moverInfo={mover} key={mover.id}/>)}
    </SelectMoverList>
  );
};

export default SelectMover;
