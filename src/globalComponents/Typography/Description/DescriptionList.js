import React from 'react';
import Styled from 'styled-components'

const Container = Styled.dl`
  margin: 0;
`

const DescriptionList = ({ children }) => {
  return (
    <Container>{ children }</Container>
  );
}

export default DescriptionList;