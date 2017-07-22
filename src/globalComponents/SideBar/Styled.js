import Styled from 'styled-components';
import { 
  borderPrimary,
  textDark 
} from '../../foundation/Variables';

const List = Styled.ul`
  border-radius: 3px;
  list-style-type: none;
  margin: 0;
  padding: .75rem;
  border: 1px solid ${borderPrimary};
  
`;

const ListItem = Styled.li`
  margin: 0;
  position: relative;
  font-weight: bold;
  
  a {
    padding: 1rem;
    display: block;
    text-decoration: none;
    color: ${textDark}
  }

  a.active {
    border-radius: 3px;
    background: ${props => props.theme.primaryColor};
    color: white;
  }
`;

export {
  ListItem,
  List
};