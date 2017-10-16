import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  color: ${props => props.theme.colors.textDark};
`;

export const Tr = styled.ul`
  list-style: none;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderPrimary};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Th = styled.li`
  flex: 1;
`

export const Td = styled.li`
  flex: 1;
`
