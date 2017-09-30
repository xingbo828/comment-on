import React from 'react';
import {
  CardDiv
} from './Styled';


const Card = ({ children, offset, style }) => {
  return(
    <CardDiv offset={offset} style={style}>
      {children}
    </CardDiv>
  );
}

export default Card;
