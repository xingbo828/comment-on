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
  margin: 3rem 0;
  align-items: center;
`

export const ProfileImage = Styled.div`
  width: 100px;
  height: 100px;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
  border-radius: 4px;
  border: 1px solid ${props=>props.theme.colors.border};
`

export const ProfileInfo = Styled.div`

`

export const ProfileName = Styled.h1`
  font-size: 2rem;
  margin: 0 0 0 1.5rem;
  font-weight: 800;
`

