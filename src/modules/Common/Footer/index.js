import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose, renderNothing, branch } from 'recompose';
import { Footer, OrgContainer, List, ListItem } from './Styled';
import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';
import footerHiddenList from './footerHiddenList.json';

const { Container, Row, Col } = Grid;

const FooterNav = props => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Heading wrapperTag="h4" size="xs">
              Comment On
            </Heading>
            <List>
              <ListItem>
                <Link to="/mover/create">Become Mover</Link>
              </ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Heading wrapperTag="h4" size="xs">
              About
            </Heading>
            <List>
              <ListItem>One</ListItem>
              <ListItem>Two</ListItem>
              <ListItem>Three</ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Heading wrapperTag="h4" size="xs">
              Support
            </Heading>
            <List>
              <ListItem>One</ListItem>
              <ListItem>Two</ListItem>
              <ListItem>Three</ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Heading wrapperTag="h4" size="xs">
              Terms &amp; services
            </Heading>
            <List>
              <ListItem>One</ListItem>
              <ListItem>Two</ListItem>
              <ListItem>Three</ListItem>
            </List>
          </Col>
        </Row>
        <OrgContainer />
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
