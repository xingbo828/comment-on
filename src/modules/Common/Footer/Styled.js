import Styled from 'styled-components';

const Footer = Styled.footer`
  border-top: 1px solid ${props => props.theme.colors.border};
  background: white;
  padding: 3rem 0 2rem;

  ${props=>props.theme.media.greaterThan('md')`
    padding: 6rem 4rem;
  `}
`;

const OrgContainer = Styled.div`
  margin: 0 0 0;
  line-height: 80px;
  height: 80px;
`;

const List = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 2rem;
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
  font-size: .875rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 0 0 1rem;
  margin: 0 0 1rem;
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
