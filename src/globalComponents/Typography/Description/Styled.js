import Styled from 'styled-components';

const DefinitionContainer = Styled.div`
  display: flex;
  width: 250px;
`;

const Term = Styled.dt`
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 .65rem;
  }
`;

const Definition = Styled.dd`
  margin: 0 0 0 4rem;
  text-align: right;
  margin-left: auto;
`;

export {
  DefinitionContainer,
  Term,
  Definition
}