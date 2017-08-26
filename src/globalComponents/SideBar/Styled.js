import Styled from 'styled-components';
import { 
  media,
  borderPrimary,
  textDark 
} from '../../foundation/Variables';

const List = Styled.ul`
  border-radius: 3px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${borderPrimary};

  ${media.fromMedium`
    padding: .75rem;
    border: none;
    border: 1px solid ${borderPrimary};
    display: block;
  `}
`;

const ListItem = Styled.li`
  margin: 0;
  position: relative;
  font-weight: bold;
  border-bottom: 1px solid ${borderPrimary};

  ${media.fromMedium`
    border: none;
    display: block;
  `}

  
  
  a {
    padding: 1rem;
    display: block;
    text-decoration: none;
    color: ${textDark}
  }

  a::after {
    content: '\f054';
    font-size: .5rem;
    line-height: 1rem;
    font-family: FontAwesome;
    float: right;
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