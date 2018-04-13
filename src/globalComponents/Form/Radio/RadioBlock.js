import React from 'react';
import Radio from './Radio';
import { Paragraph } from '../../Typography';
import {
  RadioBlockContainer,
  RadioBlockContainerInner,
  RadioBlockNestedChildren
} from  './RadioBlockStyles';


const RadioBlock = ({desc, label, value, checked, onCheck, children}) => {
  return (
    <RadioBlockContainer>
      <RadioBlockContainerInner checked={checked}>
        <Radio label={label} value={value} checked={checked} onCheck={onCheck} />
        <Paragraph>{desc}</Paragraph>
      </RadioBlockContainerInner>
      <RadioBlockNestedChildren>
        { children }
      </RadioBlockNestedChildren>
    </RadioBlockContainer>
  );
};

RadioBlock.propTypes = {

};

export default RadioBlock;
