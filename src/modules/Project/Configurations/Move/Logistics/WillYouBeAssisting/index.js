import React from 'react';
import { RadioList, RadioListItem } from '../../../../../../globalComponents/Form/RadioNew';
import { Legend } from '../../../../../../globalComponents/Form';

import {
  StyledContainer
} from './Styled';

const WillYouBeAssisting = ({ onChange, value, label, name, desc }) => {
  const yesDesc = `Contrary to popular belief, Lorem Ipsum is not simply.`;
  const noDesc = `Contrary in literature from 45 BC old.`;
  return (
    <StyledContainer>
      <Legend>{label}</Legend>
      <RadioList
        name={name}
        value={value}
        onChange={onChange}
      >
        <RadioListItem description={yesDesc} value="yes" label="Yes" />
        <RadioListItem description={noDesc} value="no" label="No" />
      </RadioList>
    </StyledContainer>
  );
};

export default WillYouBeAssisting;
