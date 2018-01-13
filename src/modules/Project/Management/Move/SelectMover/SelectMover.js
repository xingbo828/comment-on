import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import {
  SelectMoverList,
  SelectMoverListHeading,
  SelectMoverListHeadingName,
  SelectMoverListHeadingEst,
  SelectMoverListHeadingAction,
  SelectMoverFormAction,
  RadioContainer
} from './Styled';
import SelectMoverItemList from './SelectMoverItemList';

const renderSelectMoverItemList = ({ input, movers, projectId }) => {
  return (
    <SelectMoverItemList
      value={input.value}
      onChange={input.onChange}
      movers={movers}
      projectId={projectId}
    />
  );
};

const SelectMover = ({
  moversInfo,
  projectId,
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <SelectMoverList>
      <SelectMoverListHeading>
        <RadioContainer />
        <SelectMoverListHeadingName>Name</SelectMoverListHeadingName>
        <SelectMoverListHeadingEst>Estimate</SelectMoverListHeadingEst>
        <SelectMoverListHeadingAction>Actions</SelectMoverListHeadingAction>
      </SelectMoverListHeading>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderSelectMoverItemList}
          name="selectedMover"
          movers={moversInfo}
          projectId={projectId}
        />
        <SelectMoverFormAction>
          <Button type="submit" primary disabled={submitting || !valid}>
            Select this mover
          </Button>
        </SelectMoverFormAction>
      </form>
    </SelectMoverList>
  );
};

export default SelectMover;
