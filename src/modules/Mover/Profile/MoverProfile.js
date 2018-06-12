import React from 'react';
import get from 'lodash/get';
import Grid from '../../../globalComponents/Grid';
import Box from '../../../globalComponents/Box';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import { HairlineDivider } from '../../../globalComponents/Dividers';
import {
  DescriptionList,
  DescriptionEntry
} from '../../../globalComponents/Typography/Description';
import { List, ListItem } from '../../../globalComponents/Typography/List';
import BusinessReview from './BusinessReview';

import {
  ContentWrapper,
  ContactInfoListItemLink,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileName
} from './Styled';

const { Container, Row, Col } = Grid;

const MoverProfile = ({ profileData, reviewStatus, reviewData, history }) => (
  <Container>
    <Row>
      <Col xs={8} sm={10} md={10} lg={8}>
        <ProfileHeader>
          <ProfileImage src={profileData.logo} />
          <ProfileInfo>
            <ProfileName>{profileData.name}</ProfileName>
          </ProfileInfo>
        </ProfileHeader>
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <HairlineDivider />
        <Heading wrapperTag="h3" size="md" indent>
          About
        </Heading>
        <ContentWrapper>
          <Paragraph>{profileData.description}</Paragraph>
          <Heading wrapperTag="h3" size="sm">
            Return policy
          </Heading>
          <Paragraph>100% Money back</Paragraph>
          <Heading wrapperTag="h3" size="sm">
            Return policy
          </Heading>
          <Paragraph>100% Money back</Paragraph>
          <Heading wrapperTag="h3" size="sm">
            Return policy
          </Heading>
          <Paragraph>100% Money back</Paragraph>
        </ContentWrapper>
      </Col>
    </Row>

    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <HairlineDivider />
        <Heading wrapperTag="h3" size="md" indent>
          Reviews
        </Heading>
        <Container>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Box vertical={2}>
                <BusinessReview
                  type="google"
                  loading={reviewStatus !== 'LOADED'}
                  rateCount={get(reviewData, ['google', 'reviews_count'])}
                  rating={get(reviewData, ['google', 'rating'])}
                  name={get(reviewData, ['google', 'name'])}
                  link={get(reviewData, ['google', 'url'])}
                />
              </Box>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Box vertical={2}>
                <BusinessReview
                  type="yelp"
                  name={get(reviewData, ['yelp', 'name'])}
                  loading={reviewStatus !== 'LOADED'}
                  link={get(reviewData, ['yelp', 'url'])}
                  rateCount={get(reviewData, ['yelp', 'review_count'])}
                  rating={get(reviewData, ['yelp', 'rating'])}
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <HairlineDivider />
        <Heading wrapperTag="h3" size="md" indent>
          About us
        </Heading>
        <ContentWrapper>
          <Paragraph>{profileData.description}</Paragraph>
        </ContentWrapper>
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <HairlineDivider />
        <Heading wrapperTag="h3" size="md" indent>
          Contact
        </Heading>
        <ContentWrapper>
          <List>
            <ListItem glyph="phone">
              <ContactInfoListItemLink href={`tel:${profileData.phoneNumber}`}>
                {profileData.phoneNumber}
              </ContactInfoListItemLink>
            </ListItem>
            <ListItem glyph="envelope">
              <ContactInfoListItemLink href={`mailto:${profileData.email}`}>
                {profileData.email}
              </ContactInfoListItemLink>
            </ListItem>
            <ListItem glyph="globe">
              <ContactInfoListItemLink href="#">
                nathansmoving.com
              </ContactInfoListItemLink>
            </ListItem>
          </List>
        </ContentWrapper>
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <HairlineDivider />
        <Heading wrapperTag="h3" size="md" indent>
          Business hours
        </Heading>
        <ContentWrapper>
          <DescriptionList>
            <DescriptionEntry term="Sunday" definition="Closed" />
            <DescriptionEntry term="Monday" definition="10:00am - 6:00pm" />
            <DescriptionEntry term="Tuesday" definition="10:00am - 6:00pm" />
            <DescriptionEntry term="Wednesday" definition="10:00am - 6:00pm" />
            <DescriptionEntry term="Thursday" definition="10:00am - 6:00pm" />
            <DescriptionEntry term="Friday" definition="10:00am - 6:00pm" />
            <DescriptionEntry term="Saturday" definition="10:00am - 5:00pm" />
          </DescriptionList>
        </ContentWrapper>
      </Col>
    </Row>
  </Container>
);

export default MoverProfile;
