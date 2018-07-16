import Styled from 'styled-components';

const Footer = Styled.footer`
  background: ${props => props.theme.colors.offWhite};
`;

const OrgContainer = Styled.div`
  margin: 0 0 0;
  line-height: 80px;
  height: 80px;
  background: ${props => props.theme.colors.darkOffWhite};
`;

const List = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 6rem;
  list-style-type: none;
`;

const ListItem = Styled.li`
  flex: 1 50%;
  font-weight: 500;
  margin: 0 0 .5rem;
  line-height: 1.5;
  font-size: .75rem;
  text-decoration: none;
  color: ${props => props.theme.colors.textDark};
`;

const ListHeading = Styled.h3`
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${props => props.theme.colors.border};;
  padding: 0 0 1rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textLight};
`


const Copyright = Styled.span`
  font-size: .75rem;
`;

export {
  Footer,
  OrgContainer,
  List,
  ListItem,
  Copyright,
  ListHeading
}
