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

const Aside = Styled.aside`
  flex: 1 100%;
  order: 1;

  ${props=>props.theme.media.greaterThan('md')`
    margin: -4rem 0 0;
    order: 2;
    flex: 4;
    margin-left: 2.75%;
  `}
`;

const CtaContainer = Styled.div`
  transform: none;
  text-align: center;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  ${props=>props.theme.media.greaterThan('md')`
    position: static;
    height: 0;
  `}
`;

export {
  CtaContainer,
  HeroDiv,
  ProfileContentContainer,
  Content,
  Aside,
  CommentContainer  
}