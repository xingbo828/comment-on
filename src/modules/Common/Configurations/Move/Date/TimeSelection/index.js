import React from 'react';
import { Legend } from '../../../../../../globalComponents/Form'
import {
  RadioListItem,
  RadioList 
} from '../../../../../../globalComponents/Form/RadioNew';


import { GroupWrapper } from './Styled';
// import TimeRangeOption from './TimeRangeOption';
import { MOVING_SEARCH_TIME_RANGE } from '../../../../../../constants';

const SearchTimeRangeSelection = ({ label, value, onChange }) => {
  const renderOptions = options => {
    return options.map(s => (
      <RadioListItem icon={s.icon} key={s.value} label={s.label} value={s.value} />
    ));
  };

  return (
    <GroupWrapper>
      <Legend>{label}</Legend>
      <RadioList
        label={label}
        name="vehicle"
        value={value}
        onChange={onChange}
      >
        {renderOptions(MOVING_SEARCH_TIME_RANGE)}
      </RadioList>
    </GroupWrapper>
  );
};

export default SearchTimeRangeSelection;
