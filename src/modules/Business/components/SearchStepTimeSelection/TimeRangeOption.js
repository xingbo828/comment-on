import React from 'react';
import { Radio } from '../../../../globalComponents/Form';
import {
  ContainerOutter,
  Container,
  ParagraphWrapper,
  CheckMark
} from './Styled';
import { Paragraph } from '../../../../globalComponents/Typography';

const TimeRangeOption = ({ value, label, checked, onCheck }) => (
  <ContainerOutter>
    <Container checked={checked}>
      <CheckMark checked={checked} />
      <ParagraphWrapper checked={checked}>
        <Paragraph>{label}</Paragraph>
      </ParagraphWrapper>
      <div style={{ display: 'none' }}>
        <Radio.Radio onCheck={onCheck} label={label} value={value} />
      </div>
    </Container>
  </ContainerOutter>
);

export default TimeRangeOption;
