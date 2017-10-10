import Styled from 'styled-components';

const ContainerNav = Styled.nav`
  height: 60px;
  line-height: 60px;
  // border: ${({theme}) => theme.colors.borderPrimary} solid 1px;

  ul {
    padding: 0 5.5%;
    max-width: 1200px;
    margin: 0 auto;    
  }

  li {
    display: inline;
    margin: 0 1rem 0 0;
  }

  a {
    color: ${({theme}) => theme.colors.secondaryAction};
    text-decoration: none;
    font-weight: 600;
  }
`;

export {
  ContainerNav
};