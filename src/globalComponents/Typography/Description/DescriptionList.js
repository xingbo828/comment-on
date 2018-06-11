import React from 'react';
import Styled from 'styled-components'

const Container = Styled.dl`
  margin: 0 0 1.5rem;
`

const DescriptionList = ({ children }) => {
  return (
    <Container>{ children }</Container>
  );
}

export default DescriptionList;