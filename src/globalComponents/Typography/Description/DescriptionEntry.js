import React from 'react';
import {
  DefinitionContainer,
  Term,
  Definition
} from './Styled';

const DescriptionEntry = ({ term, children }) => {
  return (
    <DefinitionContainer>
      <Term>{term}</Term>
      <Definition>{children}</Definition>
    </DefinitionContainer>
  );
}

export default DescriptionEntry;