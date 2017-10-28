import React from 'react';
import {Radio} from '../../../../globalComponents/Form';
import {
  GroupWrapper
} from  './Styled';
import Size from './Size';
import pickUpTruck from './imgs/pickup-truck.png';
import van from './imgs/van.png';
import feet16 from './imgs/16-feet-truck.png';
import semiTruck from './imgs/semi-truck.png';

const SearchVehicleSizeSelection = ({ value, onChange }) => {

  const sizes = [{
    value: 'pickUpTruck',
    label: 'Pickup Truck',
    img: pickUpTruck,
  }, {
    value: 'van',
    label: 'Van',
    img: van
  }, {
    value: '16-ft',
    label: '16. ft',
    img: feet16
  }, {
    value: 'semi',
    label: 'Semi',
    img: semiTruck
  }];

  const renderSizes = (sizes) => {
    return sizes.map(s => <Size key={s.value} img={s.img} label={s.label} value={s.value} />);
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
