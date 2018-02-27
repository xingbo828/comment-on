import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import PageHeader from '../../../globalComponents/Layout/PageHeader';
import Link from '../../../globalComponents/Link';
import Icon from '../../../globalComponents/Icon';
import Comment from '../../../globalComponents/Comment';

import {
  ContactInfoContainer,
  Divider,
  ContactInfoList,
  ContactInfoListItem,
  ContactInfoListItemLink,
  ImgContainer,
  CrewMemberContainer,
  CrewMemberItemContainer
} from './Styled';

const { Container, Row, Col } = Grid;

const MoverProfile = ({ profile, history }) => (
  <div>
    <PageHeader>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Link secondary onClick={history.goBack}>
              <Icon icon="arrow-left" />&nbsp;&nbsp;Back
            </Link>
            <Heading wrapperTag="h1" size="md">
              {profile.businessName}
            </Heading>
          </Col>
        </Row>
      </Container>
    </PageHeader>
    <ContactInfoContainer>
      <Container>
        <Row>
          <Col xs={8} sm={10} md={10} lg={8}>
            <ImgContainer>
              <img src={profile.logo} alt="Logo" />
            </ImgContainer>
          </Col>
          <Col xs={16} sm={14} md={14} lg={8}>
            <ContactInfoList>
              <ContactInfoListItem>
                <ContactInfoListItemLink
                  href={`tel:${profile.businessPhoneNumber}`}
                >
                  <Icon icon="phone" style={{ marginRight: '1rem' }} />
                  {profile.businessPhoneNumber}
                </ContactInfoListItemLink>
              </ContactInfoListItem>
              <ContactInfoListItem>
                <ContactInfoListItemLink
                  href={`mailto:${profile.businessEmail}`}
                >
                  <Icon icon="envelope" style={{ marginRight: '1rem' }} />
                  {profile.businessEmail}
                </ContactInfoListItemLink>
              </ContactInfoListItem>
            </ContactInfoList>
          </Col>
        </Row>
      </Container>
    </ContactInfoContainer>
    <Container>
      <Row>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Divider />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Heading wrapperTag="h3" size="sm" underline>
            About
          </Heading>
          <Paragraph>{profile.businessDescription}</Paragraph>
        </Col>
      </Row>
    </Container>
    {profile.crewMembers && (
      <Container>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Heading wrapperTag="h3" size="sm" underline>
              Crew
            </Heading>
            <CrewMemberContainer>
              {profile.crewMembers.map(member => {
                return (
                  <CrewMemberItemContainer key={member.name}>
                    <Comment photo={member.avatar} name={member.name} copy={member.description} />
                  </CrewMemberItemContainer>
                );
              })}
            </CrewMemberContainer>
          </Col>
        </Row>
      </Container>
    )}
  </div>
);

export default MoverProfile;
