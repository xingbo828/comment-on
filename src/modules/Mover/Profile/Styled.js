import Styled from 'styled-components';

export const Divider = Styled.hr`
  margin: ${props=> props.theme.spaces.wide} 0;
  border: none;
  border-top: 1px dashed ${props=>props.theme.colors.border};
`;

export const ContactInfoContainer = Styled.section`
  padding-top: ${props=>props.theme.spaces.wide};
  padding-bottom: ${props=>props.theme.spaces.base};
`;


export const ContactInfoList = Styled.ul`
  padding: ${props=>props.theme.spaces.base} 0;
  margin: 0;
`;

export const ContactInfoListItem = Styled.li`
  list-style: none;
  padding: ${props=>props.theme.spaces.tight} 0;
`;

export const ContactInfoListItemLink = Styled.a`
  color: ${props=>props.theme.colors.textDark};
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

