import React from 'react';
import {
  DefinitionContainer,
  Term,
  Definition
} from './Styled';

const DescriptionEntry = ({ term, definition }) => {
  return (
    <DefinitionContainer>
      <Term>{term}</Term>
      <Definition>{definition}</Definition>
    </DefinitionContainer>
  );
}

export default DescriptionEntry;