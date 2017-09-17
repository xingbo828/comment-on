import React from 'react';
import {
  CardDiv
} from './Styled';


const Card = ({ children, offset }) => {
  return(
    <CardDiv offset="-120">
      {children}
    </CardDiv>
  );
}

export default Card;
