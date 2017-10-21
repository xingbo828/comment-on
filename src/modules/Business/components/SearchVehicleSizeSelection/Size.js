import React from 'react';
import {Radio} from '../../../../globalComponents/Form';
import {
  ContainerOutter,
  Container,
  ParagraphWrapper,
  CheckMark,
  Img
} from  './Styled';
import { Paragraph } from '../../../../globalComponents/Typography';

const Size = ({value, label, checked, onCheck}) =>
(
      <ContainerOutter>
        <Container checked={checked}>
          <CheckMark checked={checked} />
          <Img src="http://via.placeholder.com/200x100" />
          <ParagraphWrapper checked={checked}>
            <Paragraph>{label}</Paragraph>
          </ParagraphWrapper>
          <div style={{display: 'none'}}>
            <Radio.Radio  onCheck={onCheck} label={label} value={value} />
          </div>
        </Container>
      </ContainerOutter>
);



export default Size;
