import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import { HairlineDivider } from '../../../globalComponents/Dividers';
import { DescriptionList, DescriptionEntry } from '../../../globalComponents/Typography/Description';
import { List, ListItem } from '../../../globalComponents/Typography/List';
import TitledSection from '../../../globalComponents/TitledSection';
import {
  ContentWrapper,
  ContactInfoListItemLink,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileName
} from './Styled';


const { Container, Row, Col } = Grid;

const MoverProfile = ({ profile, history }) => (
  <Container>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <ProfileHeader>
          <ProfileImage src={profile.logo} />
          <ProfileInfo>
            <ProfileName>{profile.name}</ProfileName>
          </ProfileInfo>
        </ProfileHeader>
        <HairlineDivider />
      </Col>
    </Row>
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <TitledSection title="About">
          <Paragraph>{profile.description}</Paragraph>
        </TitledSection>
        <TitledSection title="Payment">
          <Paragraph>{profile.description}</Paragraph>
        </TitledSection>
        <TitledSection title="Contact info">
          <DescriptionList>
            <DescriptionEntry term="Phone Number">
              <ContactInfoListItemLink
                href={`tel:${profile.phoneNumber}`}
              >
                {profile.phoneNumber}
              </ContactInfoListItemLink>
            </DescriptionEntry>
            <DescriptionEntry term="Email">
              <ContactInfoListItemLink
                  href={`mailto:${profile.email}`}
                >
                {profile.email}
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
          <Paragraph>{profile.description}</Paragraph>
          <Heading wrapperTag="h3" size="sm" >
            Return policy
          </Heading>
          <Paragraph>100% Money back</Paragraph>
          <Heading wrapperTag="h3" size="sm" >
            Return policy
          </Heading>
          <Paragraph>100% Money back</Paragraph>
          <Heading wrapperTag="h3" size="sm" >
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
        <ContentWrapper>
          <Paragraph>{profile.description}</Paragraph>
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
              <ContactInfoListItemLink
                href={`tel:${profile.phoneNumber}`}
              >
                {profile.phoneNumber}
              </ContactInfoListItemLink>
            </ListItem>
            <ListItem glyph="envelope">
              <ContactInfoListItemLink
                  href={`mailto:${profile.email}`}
                >
                {profile.email}
              </ContactInfoListItemLink>
            </ListItem>
            <ListItem glyph="globe">
              <ContactInfoListItemLink
                href="#"
              >
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
