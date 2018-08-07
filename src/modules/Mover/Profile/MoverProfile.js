import React from 'react';
import get from 'lodash/get';
import startCase from 'lodash/startCase';
import lowerCase from 'lodash/lowerCase';
import Grid from '../../../globalComponents/Grid';
import Box from '../../../globalComponents/Box';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import { Tags } from '../../../globalComponents/Tags';
import { HairlineDivider } from '../../../globalComponents/Dividers';
import {
  DescriptionList,
  DescriptionEntry
} from '../../../globalComponents/Typography/Description';
import { List, ListItem } from '../../../globalComponents/Typography/List';
import { Link } from '../../../globalComponents/Link';
import TitledSection from '../../../globalComponents/TitledSection';
import BusinessReview from './BusinessReview';
import CoverPhoto from '../../../globalComponents/CoverPhoto';
import { StickyNavContainer, StickyNavSection } from './StickyNav';
import { ProfileHeader, Logo, ProfileName, TitleInfo } from './Styled';
import GetStartedWide from './GetStartedWide';
import GetStartedThin from './GetStartedThin';
import Markdown from '../../../globalComponents/Markdown';

const { Container, Row, Col } = Grid;

const mapTypeCodeToLabel = code => {
  switch (code) {
    case 'MOVE': {
      return 'Moving';
    }

    default: {
      return startCase(lowerCase(code));
    }
  }
};


const renderServiceAreaTags = (cities) => {
  const transform = cities => {
    return cities.map((city) => {
      const pieces = city.split('|');
      pieces[0] = startCase(lowerCase(pieces[0]))
      return pieces.join(', ')
    })
  }

  return <Tags values={transform(cities)} icon="map-marker" />
}


const MoverProfile = ({ profileData, reviewStatus, reviewData }) => {
  return (
    <React.Fragment>
      <CoverPhoto src={profileData.coverPhoto} />
      <Container>
        <Row>
          <Col xs={24} sm={24} md={24} lg={14} xl={14}>
            <StickyNavContainer>
              <Box vertical={9}>
                <ProfileHeader>
                  <Box between={8}>
                    <TitleInfo>
                      <ProfileName>
                        <Heading wrapperTag="h1" size="xl">
                          {profileData.name}
                        </Heading>
                      </ProfileName>
                      { profileData.logo && <Logo role="img" src={profileData.logo} /> }
                    </TitleInfo>
                    <Box between={3}>
                      <Paragraph>
                        {mapTypeCodeToLabel(
                          profileData.businessType.primaryType
                        )}{' '}
                        •{' '}
                        {profileData.businessType.subTypes
                          .map(mapTypeCodeToLabel)
                          .join('  •  ')}
                      </Paragraph>
                      <div>
                        {renderServiceAreaTags(profileData.businessServiceAreas)}
                      </div>
                    </Box>
                  </Box>
                </ProfileHeader>
              </Box>
              <HairlineDivider />
              <StickyNavSection name="About">
                <TitledSection title="About">
                  <Markdown>{profileData.description}</Markdown>
                </TitledSection>
              </StickyNavSection>
              <StickyNavSection name="Reviews">
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
              </StickyNavSection>
              {profileData.paymentMethods && (
                <StickyNavSection name="Payment">
                  <TitledSection title="Payment">
                    <List bulleted grid>
                      {profileData.paymentMethods.map(method => (
                        <ListItem>{startCase(method)}</ListItem>
                      ))}
                    </List>
                  </TitledSection>
                </StickyNavSection>
              )}
              <StickyNavSection name="Contact">
                <TitledSection title="Contact info">
                  <DescriptionList>
                    <DescriptionEntry term="Phone Number">
                      <Link
                        secondary
                        inline
                        href={`tel:${profileData.phoneNumber}`}
                      >
                        {profileData.phoneNumber}
                      </Link>
                    </DescriptionEntry>
                    <DescriptionEntry term="Email">
                      <Link
                        secondary
                        inline
                        href={`mailto:${profileData.email}`}
                      >
                        {profileData.email}
                      </Link>
                    </DescriptionEntry>
                    {profileData.website && (
                      <DescriptionEntry term="Website">
                        <Link secondary inline href="#">
                          {profileData.website}
                        </Link>
                      </DescriptionEntry>
                    )}
                  </DescriptionList>
                </TitledSection>
              </StickyNavSection>
            </StickyNavContainer>
          </Col>
          <Col xs={24} sm={24} md={24} lgOffset={1} lg={9} xlOffset={2} xl={8}>
            <GetStartedWide />
          </Col>
        </Row>
      </Container>
      <GetStartedThin />
    </React.Fragment>
  );
};

export default MoverProfile;
