import Styled from 'styled-components';

const List = Styled.ul`
  margin: 0 0 1.5rem;
  padding: 0 0 0 1.1rem;
  list-style-type: ${props => props.bulleted ? 'disc' : 'none'}

  ${props=>props.grid && `
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 50%;
    }
  `}
`

export default List