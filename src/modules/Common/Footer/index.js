import React from 'react';
import {
  Footer,
  OrgContainer
} from './Styled';
import Grid from '../../../globalComponents/Grid'

const { Container } = Grid;

const FooterNav = (props) => {
  return (
    <Footer>
      <Container>

        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
          

        <OrgContainer>

        </OrgContainer>
      </Container>
    </Footer>
  )
};

export default FooterNav;