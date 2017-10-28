import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, renderNothing, branch } from 'recompose';
import {
  Footer,
  OrgContainer,
  List,
  ListItem
} from './Styled';
import Grid from '../../../globalComponents/Grid'
import { Heading } from '../../../globalComponents/Typography'

const { Container, Row, Col } = Grid;

const FooterNav = (props) => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Heading wrapperTag="h4" size="xs">Comment On</Heading>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Heading wrapperTag="h4" size="xs">About</Heading>
            <List>
              <ListItem>One</ListItem>
              <ListItem>Two</ListItem>
              <ListItem>Three</ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
          <Heading wrapperTag="h4" size="xs">Support</Heading>
            <List>
              <ListItem>One</ListItem>
              <ListItem>Two</ListItem>
              <ListItem>Three</ListItem>
            </List>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
          <Heading wrapperTag="h4" size="xs">Terms &amp; services</Heading>
            <List>
              <ListItem>One</ListItem>
              <ListItem>Two</ListItem>
              <ListItem>Three</ListItem>
            </List>
          </Col>
        </Row>
        <OrgContainer>
        </OrgContainer>
      </Container>
    </Footer>
  )
};

export default compose(
  withRouter,
  branch(
    props => props.location.pathname === '/login',
    renderNothing
  )
)(FooterNav);
