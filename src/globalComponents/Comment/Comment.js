
import React from 'react';
import Avatar from '../Avatar';
import Rate from '../Rate';
import {
  ContainerDiv,
  Blockquote,
  AvatarContainer,
  ContentContainer,
  User,
  Context,
  NameSpan,
  RatingContainer
} from './Styled';

const Comment = ({ photo, stars, name, meta, copy }) => {

  return (
    <ContainerDiv>
      <User>
        <AvatarContainer>
          <Avatar src={photo} size="lg"/>
        </AvatarContainer>
        <NameSpan>{name}</NameSpan>
        {meta && <Context>{meta}</Context>}
        {stars &&
          <RatingContainer>
            <Rate value={stars} readOnly={true} />
          </RatingContainer>
        }
      </User>
      <ContentContainer>
        <Blockquote quote={!!stars}>{copy}</Blockquote>
      </ContentContainer>
    </ContainerDiv>
  );
};

export default Comment;
