import Styled from 'styled-components';

const DefinitionContainer = Styled.div`
  display: flex;
`;

const Term = Styled.dt`
  flex: 1;
  text-align: left;
  color: ${({theme}) => theme.colors.textLight };
  
  &:not(:last-child) {
    margin: 0 0 1rem;
  }
`;

const Definition = Styled.dd`
  flex: 1;
  text-align: right;
`;

export {
  DefinitionContainer,
  Term,
  Definition
}