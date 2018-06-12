import Styled from 'styled-components';

const List = Styled.ul`
  margin: 0 0 1.5rem;
  padding: 0;
  list-style-type: ${props => props.bulleted ? 'circle' : 'none'}
`

export default List