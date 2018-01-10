import React from 'react';
import SelectMoverItem from './ItemContainer';
import {
  SelectMoverList,
  SelectMoverListHeading,
  SelectMoverListHeadingName,
  SelectMoverListHeadingEst,
  SelectMoverListHeadingAction
} from './Styled';


const SelectMover = ({ moversInfo, projectId }) => {
  return (
    <SelectMoverList>
      <SelectMoverListHeading>
        <SelectMoverListHeadingName>Name</SelectMoverListHeadingName>
        <SelectMoverListHeadingEst>Estimate</SelectMoverListHeadingEst>
        <SelectMoverListHeadingAction>Actions</SelectMoverListHeadingAction>
      </SelectMoverListHeading>
      {moversInfo.map(mover => <SelectMoverItem moverInfo={mover} projectId={projectId} key={mover.provider.id}/>)}
    </SelectMoverList>
  );
};

export default SelectMover;
