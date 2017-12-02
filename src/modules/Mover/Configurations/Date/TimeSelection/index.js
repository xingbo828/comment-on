import React from 'react';
import { Radio } from '../../../../../globalComponents/Form';
import { GroupWrapper } from './Styled';
import TimeRangeOption from './TimeRangeOption';
import { MOVING_SEARCH_TIME_RANGE } from '../../../../../constants';

const SearchTimeRangeSelection = ({ value, onChange }) => {
  const renderOptions = options => {
    return options.map(s => (
      <TimeRangeOption key={s.value} label={s.label} value={s.value} />
    ));
  };

  return (
    <GroupWrapper>
      <Radio.RadioGroup
        childType="wild"
        label="Pick-up time"
        name="vehicle"
        value={value}
        onChange={onChange}
      >
        {renderOptions(MOVING_SEARCH_TIME_RANGE)}
      </Radio.RadioGroup>
    </GroupWrapper>
  );
};

export default SearchTimeRangeSelection;
