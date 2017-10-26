import Styled from 'styled-components';

const Footer = Styled.footer`
  background: ${props => props.theme.colors.offWhite};
`;


const OrgContainer = Styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderPrimary};
  line-height: 200px;
`;


export {
  Footer,
  OrgContainer
}