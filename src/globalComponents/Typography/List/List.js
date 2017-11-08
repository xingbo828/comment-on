import Styled from 'styled-components';

const list = Styled.ul`
  list-style-type: ${props => props.bulleted ? 'circle' : 'none'}
`

const listItem = Styled.li`
  font-size: 1rem;
`;