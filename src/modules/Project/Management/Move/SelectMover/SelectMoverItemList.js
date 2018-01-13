import React from 'react';
import { Radio } from '../../../../../globalComponents/Form';
import SelectMoverItem from './ItemContainer';

const SelectMoverItemList = ({ onChange, value, movers, projectId }) => {
  return (
    <Radio.RadioGroup
      childType="wild"
      name="selectedMover"
      value={value}
      onChange={onChange}
    >
      {movers.map(mover => (
        <SelectMoverItem
          value={mover.provider.id}
          key={mover.provider.id}
          moverInfo={mover}
          projectId={projectId}
        />
      ))}
    </Radio.RadioGroup>
  );
};

export default SelectMoverItemList;
