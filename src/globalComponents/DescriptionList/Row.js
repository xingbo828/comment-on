import React from 'react';
import {
  DefinitionContainer,
  Term,
  Definition
} from './Styled';

const Row = ({ term, definition }) => {
  return (
    <DefinitionContainer>
      <Term>{term}</Term>
      <Definition>{definition}</Definition>
    </DefinitionContainer>
  );
}

export default Row;