import React from 'react';
import { Radio } from '../../../../../globalComponents/Form';
import {
  StyledContainer
} from './Styled';

const WillYouBeAssisting = ({ onChange, value, label, name }) => {
  const yesDesc = `Contrary to popular belief, Lorem Ipsum is not simply.`;
  const noDesc = `Contrary in literature from 45 BC old.`;
  return (
    <StyledContainer>
      <Radio.RadioGroup
        childType="wild"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        <Radio.RadioBlock desc={yesDesc} value="yes" label="Yes" />
        <Radio.RadioBlock desc={noDesc} value="no" label="No" />
      </Radio.RadioGroup>
    </StyledContainer>
  );
};

export default WillYouBeAssisting;
