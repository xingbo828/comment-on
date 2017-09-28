import styled from 'styled-components';
import {
  borderPrimary,
  primaryColor,
  primaryActionColor,
  textDark
} from '../../foundation/Variables';

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  color: ${textDark};
`;

export const Tr = styled.ul`
  list-style: none;
  width: 100%;
  border-top: 1px solid ${borderPrimary};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Td = styled.li`
  flex: 1;
`
