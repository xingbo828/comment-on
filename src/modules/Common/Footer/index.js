import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, renderNothing, branch } from 'recompose';
import Logo from '../../../globalComponents/Logo';
import { 
  Footer, 
  ListHeading,
  List,
  ListItem
} from './Styled';
import Box from '../../../globalComponents/Box';
import Grid from '../../../globalComponents/Grid';
import footerHiddenList from './footerHiddenList.json';
import Paragraph from '../../../globalComponents/Typography/Paragraph';
import ReactRouterLink from '../../../globalComponents/Link';

const { Container, Row, Col } = Grid;

const FooterNav = () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <Box between={4} below={6}>
              <Logo />
              <Box between={0}>
                <Paragraph small light>Made with love in Vacouver, BC</Paragraph>
                <Paragraph small light>In Need © 2018 All rights reserved</Paragraph>
              </Box>
            </Box>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <ListHeading wrapperTag="h4" size="xs">
              Get Started
            </ListHeading>
            <List>
              <ListItem><ReactRouterLink to="/register" secondary>Register</ReactRouterLink></ListItem>
              <ListItem><ReactRouterLink to="/profile/vancouver-moving" secondary>Try the Demo</ReactRouterLink></ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <ListHeading wrapperTag="h4" size="xs">
              Support
            </ListHeading>
            <List>
              <ListItem><ReactRouterLink secondary>Contact us</ReactRouterLink></ListItem>
              <ListItem><ReactRouterLink secondary>Terms &amp; conditions</ReactRouterLink></ListItem>
              <ListItem><ReactRouterLink secondary>Privacy Policy</ReactRouterLink></ListItem>
            </List>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

const pathMatchesHiddenList = (pathname) => {
  return footerHiddenList.some(pathItem => {
    const reg = new RegExp(pathItem);
    return reg.test(pathname)
  });
};

export default compose(
  withRouter,
  branch(props => pathMatchesHiddenList(props.location.pathname), renderNothing)
)(FooterNav);
