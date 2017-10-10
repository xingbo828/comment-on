import Styled from 'styled-components';
import variables from '../../foundation/variables';
import media from '../../foundation/mediaQueries';

const List = Styled.ul`
  border-radius: 3px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${variables.colors.borderPrimary};

  ${media.greaterThan('md')`
    padding: .75rem;
    border: none;
    border: 1px solid ${variables.colors.borderPrimary};
    display: block;
  `}
`;

const ListItem = Styled.li`
  margin: 0;
  position: relative;
  font-weight: bold;
  border-bottom: 1px solid ${variables.colors.borderPrimary};

  ${media.greaterThan('md')`
    border: none;
    display: block;
  `}

  
  
  a {
    padding: 1rem;
    display: block;
    text-decoration: none;
    color: ${variables.colors.textDark}
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
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

export {
  ListItem,
  List
};