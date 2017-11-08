import Styled from 'styled-components';

const HeroDiv = Styled.div`
  height: 200px;
  background: url(http://images.huffingtonpost.com/2016-09-13-1473769006-9036433-Moving.jpg) center center;
  background-size: cover;

  ${props=>props.theme.media.greaterThan('md')`
    height: 600px;
  `}
`;

const ProfileContentContainer = Styled.div`
  display: flex;
  justify-content: space-between;

  ${props=>props.theme.media.lessThan('md')`
    flex-direction: column;
    margin: -2rem 0 0;
  `}
`;

const CommentContainer = Styled.div`
  margin: 2rem 0;
`;

const Content = Styled.div`
  flex: 1 100%;
  order: 2;

  ${props=>props.theme.media.greaterThan('md')`
    order: 1;
    flex: 8;
    margin-right: 2.75%;
  `}
`;


export {
  HeroDiv,
  ProfileContentContainer,
  Content,
  CommentContainer
}
