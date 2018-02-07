import styled from 'styled-components';

export const OverviewCardContainer = styled.div`
  margin-top: ${props=>props.theme.spaces.xWide};

  ${props=> props.theme.media.greaterThan('md')`
    margin-top: 0;
  `};
`;

export const OverviewCardMeta = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${props=>props.theme.spaces.wide};
  font-size: .875rem;
  color: ${props=>props.theme.colors.textDark};
`;

export const OverviewCardMetaItem = styled.li`
  padding: ${props=>props.theme.spaces.base} 0;
  display: flex;
`;


export const OverviewCardMetaItemIcon = styled.span`
  text-align: center;
  width: 16px;
  display: inline-block;
  margin-right: ${props=>props.theme.spaces.base};
`;
