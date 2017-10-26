import React from 'react';
import Grid from '../../../globalComponents/Grid';
import SecondaryNav from '../../../globalComponents/SecondaryNav';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import Estimate from './Estimate';
import Card from '../../../globalComponents/Card';
import Comment from '../../../globalComponents/Comment';
import {
  DescriptionList,
  Row
} from '../../../globalComponents/DescriptionList';
import {
  Button
} from '../../../globalComponents/Form';
import {
  HeroDiv,
  ProfileContentContainer,
  CommentContainer,
  Content,
  Aside,
  CtaContainer
} from './Styled';

const { Container } = Grid;

const mapReviews = (reviews) => (
  reviews.map((review) => (
    <CommentContainer>
      <Comment
        name={'Steve Jobs'}
        meta={'Oct. 17 2017'}
        stars={4.5}
        copy={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      />
    </CommentContainer>
  ))
);

const mapCrew = (Crew) => (
  Crew.map((person) => (
    <CommentContainer>
      <Comment
        name={'Steve Jobs'}
        meta={'Oct. 17 2017'}
        copy={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      />
    </CommentContainer>
  ))
);

const BusinessProfile = ({ profileState: { profile } }) => (
  <div>
    <HeroDiv />
    {/* <SecondaryNav /> */}
    <Container>
      <ProfileContentContainer>
        <Content>
          <Heading wrapperTag="h3">{profile.businessName}</Heading>
          <Paragraph>{profile.businessDescription}</Paragraph>
          <Heading wrapperTag="h3" underline>Vehicles</Heading>
          <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecatParagraph cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</Paragraph>
          <Heading wrapperTag="h3" underline>Reviews</Heading>
          {mapReviews([1,2])}
          <Heading wrapperTag="h3" underline>Crew</Heading>
          {mapCrew([1,2])}
        </Content>
        <Aside>
          <Card>
            <Estimate />
            <DescriptionList>
              <Row term="Key" definition="Value" />
              <Row term="Key" definition="Value" />
              <Row term="Key" definition="Value" />
            </DescriptionList>
            <CtaContainer>
              <Button primary icon="arrow-right">Request Move</Button>
            </CtaContainer>
          </Card>
        </Aside>
      </ProfileContentContainer>
    </Container>
  </div>
);


export default BusinessProfile;
