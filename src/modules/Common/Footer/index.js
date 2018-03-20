import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, renderNothing, branch } from 'recompose';
import { Footer, OrgContainer, List, ListItem, Copyright, ListHeading } from './Styled';
import Grid from '../../../globalComponents/Grid';
import footerHiddenList from './footerHiddenList.json';

const { Container, Row, Col } = Grid;

const FooterNav = props => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={7} lg={7}>
            <ListHeading wrapperTag="h4" size="xs">
              Company
            </ListHeading>
            <List>
              {/* <ListItem><Link to="/mover/create">Become Mover</Link></ListItem> */}
              <ListItem>Become a mover</ListItem>
              <ListItem>Facebook</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Instagram</ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7}>
            <ListHeading wrapperTag="h4" size="xs">
              Support
            </ListHeading>
            <List>
              <ListItem>About us</ListItem>
              <ListItem>Contact Us</ListItem>
              <ListItem>Blog</ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7}>
            <ListHeading wrapperTag="h4" size="xs">
              Legal
            </ListHeading>
            <List>
              <ListItem>Terms</ListItem>
              <ListItem>Copyright</ListItem>
              <ListItem>Privacy Policy</ListItem>
            </List>
          </Col>
        </Row>
      </Container>
      <OrgContainer>
        <Grid.Container>
          <Copyright>Copyright ©2018  Comment On. All rights reserved.</Copyright>
        </Grid.Container>
      </OrgContainer>
    </Footer>
  );
};

const pathMatchesHiddenList = (pathname) => {
  return footerHiddenList.some(pathItem => {
    const reg = new RegExp(pathItem);
    console.log(pathname)
    return reg.test(pathname)
  });
};

export default compose(
  withRouter,
  branch(props => pathMatchesHiddenList(props.location.pathname), renderNothing)
)(FooterNav);
