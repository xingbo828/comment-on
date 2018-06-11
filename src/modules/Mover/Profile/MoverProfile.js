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
import TitledSection from '../../../globalComponents/TitledSection';
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
      <Col xs={24} sm={24} md={24} lg={16}>
        <Box vertical={9}>
          <ProfileHeader>
            <ProfileImage src={profileData.logo} />
            <ProfileInfo>
              <ProfileName>{profileData.name}</ProfileName>
            </ProfileInfo>
          </ProfileHeader>
        </Box>
        <HairlineDivider />
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <TitledSection title="About">
          <Paragraph>{profileData.description}</Paragraph>
        </TitledSection>
        <TitledSection title="Reviews">
          <Box between={4}>
            <BusinessReview
              type="google"
              loading={reviewStatus !== 'LOADED'}
              rateCount={get(reviewData, ['google', 'reviews_count'])}
              rating={get(reviewData, ['google', 'rating'])}
              link={get(reviewData, ['google', 'url'])}
            />
            <BusinessReview
              type="yelp"
              loading={reviewStatus !== 'LOADED'}
              link={get(reviewData, ['yelp', 'url'])}
              rateCount={get(reviewData, ['yelp', 'review_count'])}
              rating={get(reviewData, ['yelp', 'rating'])}
            />
          </Box>
        </TitledSection>
        <TitledSection title="Payment">
          <List bulleted grid>
            <ListItem>Credit Card</ListItem>
            <ListItem>Debit</ListItem>
            <ListItem>Cash</ListItem>
            <ListItem>Cheque</ListItem>
            <ListItem>Draft</ListItem>
          </List>
        </TitledSection>
        <TitledSection title="Contact info">
          <DescriptionList>
            <DescriptionEntry term="Phone Number">
              <ContactInfoListItemLink
                href={`tel:${profileData.phoneNumber}`}
              >
                {profileData.phoneNumber}
              </ContactInfoListItemLink>
            </DescriptionEntry>
            <DescriptionEntry term="Email">
              <ContactInfoListItemLink
                  href={`mailto:${profileData.email}`}
                >
                {profileData.email}
              </ContactInfoListItemLink>
            </DescriptionEntry>
            <DescriptionEntry term="Website">
              <ContactInfoListItemLink
                  href="#"
                >
                nathansmoving.com
              </ContactInfoListItemLink>
            </DescriptionEntry>
          </DescriptionList>
        </TitledSection>
      </Col>
    </Row>
    {/* <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
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
                  link={get(reviewData, ['google', 'url'])}
                />
              </Box>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Box vertical={2}>
                <BusinessReview
                  type="yelp"
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
    </Row> */}
  </Container>
);

export default MoverProfile;
