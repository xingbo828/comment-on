import React from 'react';
import {Radio} from '../../../../globalComponents/Form';
import {
  GroupWrapper
} from  './Styled';
import Size from './Size';


const SearchVehicleSizeSelection = ({ value, onChange }) => {

  const sizes = [{
    value: 'small',
    label: 'Small',
    img: '',
  }, {
    value: 'medium',
    label: 'Medium',
    img: ''
  }, {
    value: 'large',
    label: 'Large',
    img: ''
  }, {
    value: 'xLarge',
    label: 'Extra large',
    img: ''
  }];

  const renderSizes = (sizes) => {
    return sizes.map(s => <Size key={s.value} label={s.label} value={s.value} />);
  }

  return (
    <GroupWrapper>
      <Radio.RadioGroup
        childType="wild"
        label="Select the vehicle that suits your move"
        name="vehicle"
        value={value}
        onChange={onChange}
      >
        {renderSizes(sizes)}
      </Radio.RadioGroup>
    </GroupWrapper>
  );
};


export default SearchVehicleSizeSelection;
