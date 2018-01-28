import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
import {
  SelectMoverFormAction
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
      <form onSubmit={handleSubmit}>
        <Field
          component={renderSelectMoverItemList}
          name="selectedMover"
          movers={moversInfo}
          projectId={projectId}
        />
        <SelectMoverFormAction>
          <Button type="submit" primary disabled={submitting || !valid}>
            Next<Icon icon="chevron-right" />
          </Button>
        </SelectMoverFormAction>
      </form>
  );
};

export default SelectMover;
