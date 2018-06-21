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
import { Link } from '../../../globalComponents/Link';
import TitledSection from '../../../globalComponents/TitledSection';
import BusinessReview from './BusinessReview';
import Gallery from './Gallery'
import {
  ProfileHeader,
  ProfileInfo
} from './Styled';
import GetStartedWide from './GetStartedWide';
import GetStartedThin from './GetStartedThin';

const { Container, Row, Col } = Grid;

const MoverProfile = ({ profileData, reviewStatus, reviewData }) => (
  <React.Fragment>
    <Container>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Box vertical={9} below={0}>
            <Gallery images={profileData.coverPhotos} />
          </Box>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <Box vertical={9}>
            <ProfileHeader>
              <ProfileInfo>
                <Heading eyebrow="test" wrapperTag="h2" size="xs">Moving Services</Heading>
                <Heading eyebrow="test" wrapperTag="h1" size="xl">{profileData.name}</Heading>
              </ProfileInfo>
            </ProfileHeader>
          </Box>
          <HairlineDivider />
          <TitledSection title="About">
            <Paragraph>
              {profileData.description}
            </Paragraph>
          </TitledSection>
          <TitledSection title="Reviews">
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
                <Link secondary inline
                  href={`tel:${profileData.phoneNumber}`}
                >
                  {profileData.phoneNumber}
                </Link>
              </DescriptionEntry>
              <DescriptionEntry term="Email">
                <Link secondary inline
                    href={`mailto:${profileData.email}`}
                  >
                  {profileData.email}
                </Link>
              </DescriptionEntry>
              <DescriptionEntry term="Website">
                <Link secondary inline
                    href="#"
                  >
                  nathansmoving.com
                </Link>
              </DescriptionEntry>
            </DescriptionList>
          </TitledSection>
        </Col>
        <Col xs={24} sm={24} md={24} lgOffset={1} lg={9} xlOffset={2} xl={8}>
          <GetStartedWide />
        </Col>
      </Row>
    </Container>
    <GetStartedThin />
  </React.Fragment>
);

export default MoverProfile;
