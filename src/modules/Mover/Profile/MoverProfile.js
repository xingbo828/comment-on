import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import Comment from '../../../globalComponents/Comment';
import ActionCard from './ActionCard';

import {
  HeadingContainer,
  ProfileContentContainer,
  CommentContainer,
  Content,
} from './Styled';

const { Container } = Grid;

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

const MoverProfile = ({ profile, location }) => (
  <div>
    <HeadingContainer>
      <Container>
        <Heading wrapperTag="h1" size="l">{profile.businessName}</Heading>
      </Container>
    </HeadingContainer>
    <Container>
      <ProfileContentContainer>
        <Content>
          <Heading wrapperTag="h3" size="sm" underline>About</Heading>
          <Paragraph>{profile.businessDescription}</Paragraph>
          <Heading wrapperTag="h3" size="sm" underline>Crew</Heading>
          {mapCrew([1,2])}
        </Content>
        <ActionCard/>
      </ProfileContentContainer>
    </Container>
  </div>
);


export default MoverProfile;
