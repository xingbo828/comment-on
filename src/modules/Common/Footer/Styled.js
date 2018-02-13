import Styled from 'styled-components';

const Footer = Styled.footer`
  margin: 4rem 0 0;
  padding: 4rem 0 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  background: border-top: 1px solid ${props => props.theme.colors.offWhite};
`;


const OrgContainer = Styled.div`
  margin: 4rem 0 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  line-height: 200px;
`;

const List = Styled.ul`
  padding: 0;
  margin: 0;
  line-height: 1.5;
  list-style-type: none;
`;

const ListItem = Styled.li`
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.colors.textLight};
`;



export {
  Footer,
  OrgContainer,
  List,
  ListItem
}
