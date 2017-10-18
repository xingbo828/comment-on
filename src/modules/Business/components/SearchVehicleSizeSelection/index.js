import React from 'react';
import {Radio} from '../../../../globalComponents/Form';
import {
  Container,
  ParagraphWrapper
} from  './Styled';

import { Paragraph } from '../../../../globalComponents/Typography';


const SearchVehicleSizeSelection = ({img, label, value, checked, onCheck}) => {
  return (
    <Container checked={checked}>
      <img src="http://via.placeholder.com/200x100" />
      <ParagraphWrapper checked={checked}>
        <Paragraph>{label}</Paragraph>
      </ParagraphWrapper>
      <div style={{display: 'none'}}>
        <Radio.Radio  onCheck={onCheck} label={label} value={value} />
      </div>
    </Container>
  );
};


export default SearchVehicleSizeSelection;
