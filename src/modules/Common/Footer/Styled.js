import Styled from 'styled-components';

const Footer = Styled.footer`
  border-top: 1px solid ${props => props.theme.colors.borderPrimary};
`;


const OrgContainer = Styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderPrimary};
  line-height: 200px;
`;

const List = Styled.ul`
  padding: 0;
  line-height: 1.5;
  list-style-type: none;
`;

const ListItem = Styled.li`
  text-decoration: none;
  color: ${props => props.theme.colors.textLight};
`;



export {
  Footer,
  OrgContainer,
  List,
  ListItem
}