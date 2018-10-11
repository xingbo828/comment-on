import Styled from 'styled-components';

export const ContactInfoListItemLink = Styled.a`
  color: ${props=>props.theme.colors.secondary};
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ImgContainer = Styled.div`
  max-width: 200px;
  width: 100%;
  > img {
    width: 100%;
  }

  ${props=>props.theme.media.greaterThan('lg')`
    width: 60%;
  `}
`;

export const CrewMemberContainer = Styled.ul`
  padding: 0;
  margin: 0;
`;

export const CrewMemberItemContainer = Styled.li`
  list-style: none;
  padding: ${props=>props.theme.spaces.base} 0;
`;

export const ContentWrapper = Styled.div`
  margin: 2.5rem 0;
`

export const ProfileHeader = Styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    width: 100%;
  }
`

export const ProfileImage = Styled.div`
  width: 100px;
  height: 100px;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
  border-radius: 4px;
`

export const ProfileName = Styled.div`
  flex: 1;
`
export const Logo = Styled.div`
  width: 80px;
  height: 80px;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;

  ${props=>props.theme.media.greaterThan('sm')`
    width: 120px;
    height: 120px;
  `}
`

export const TitleInfo = Styled.div`
  display: flex;
  align-items: center;
`
