import Styled from 'styled-components';

const HeroDiv = Styled.div`
  height: 600px;
  background: url(http://images.huffingtonpost.com/2016-09-13-1473769006-9036433-Moving.jpg) center center;
  background-position: cover;
`;

const ProfileContentContainer = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = Styled.div`
  flex: 8;
  margin-right: 2.75%;
`;

const Aside = Styled.aside`
  flex: 4;
  margin-left: 2.75%;
`;

const CtaContainer = Styled.div`
  text-align: center;
  transform: translateY(58px);
`;

export {
  CtaContainer,
  HeroDiv,
  ProfileContentContainer,
  Content,
  Aside
}