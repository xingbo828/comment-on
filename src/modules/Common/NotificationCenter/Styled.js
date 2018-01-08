import styled from 'styled-components';

export const NotificationCenterContainer = styled.div`
  display: inline-block;
  margin: 0 ${props => props.theme.spaces.wide};
`;

export const NotificationLink = styled.a`
  color: ${props=>props.enabled ? props.theme.colors.textDark : props.theme.colors.textLight};
  cursor: ${props=>props.enabled ? 'pointer' : 'not-allowed'};
`;

export const NotificationLinkText = styled.span`
  display: none;
  ${props=>props.theme.media.greaterThan('sm')`
    display: inline-block;
    padding-left: ${props.theme.spaces.tight};
  `}
`;
