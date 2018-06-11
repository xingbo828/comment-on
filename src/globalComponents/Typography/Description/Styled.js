import Styled from 'styled-components';

const DefinitionContainer = Styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 1.5rem;
  border-bottom: 1px solid ${props=>props.theme.colors.border};

  &:not(:first-of-type) {
    padding: 1.5rem 0;
  }
`;

const Term = Styled.dt`
  text-align: left;
`;

const Definition = Styled.dd`
  text-align: right;
  margin-left: auto;
`;

export {
  DefinitionContainer,
  Term,
  Definition
}