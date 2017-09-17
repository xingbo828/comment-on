import Styled from 'styled-components';

const DefinitionContainer = Styled.div`
  display: flex;
`;

const Term = Styled.dt`
  flex: 1;
  text-align: left;
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