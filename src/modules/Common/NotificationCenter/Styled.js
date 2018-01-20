import styled from 'styled-components';

export const NotificationCenterContainer = styled.div`
  cursor: pointer;
  color: ${props=>props.enabled ? props.theme.colors.textDark : props.theme.colors.textLight};
  display: inline-block;
  position: relative;
  transition: .3s;
  background-color: ${props => props.isOpen ? props.theme.colors.offWhite : 'white'};
  z-index: ${props=>props.theme.zIndex.dropdown};
  margin: 0 10px;
  ${props=>props.theme.media.greaterThan('sm')`

    background-color: white;
    transform: ${props => props.isOpen ? 'scale(1)' : 'scale(.97)'};
    box-shadow: ${props => props.isOpen ? '0 2px 15px 0px rgba(0,0,0,.2)' : '0 2px 15px 0px rgba(0,0,0,0)'};
    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: ${props=>props.theme.zIndex.dropdown + 1};
      right: 0;
      top: 50px;
      height: ${props => props.isOpen ? '20px' : '0px'};
      left: 0;
      background: white;
    }
  `}
`;

export const NotificationClickWrapper = styled.div`
  padding:0 ${props=>props.theme.spaces.wide} 0 ${props=>props.theme.spaces.tight};
`;

export const NotificationIcon = styled.div`
  font-size: .825rem;
  padding-top: 5px;
  display: inline-block;
  ${props=>props.theme.media.greaterThan('sm')`
    display: none;
  `}
`;

export const NotificationLinkText = styled.div`
  display: none;
  ${props=>props.theme.media.greaterThan('sm')`
    display: inline-block;
    padding-top: 2px;
    padding-left: ${props.theme.spaces.tight};
    font-weight: ${props.theme.fontWeights.roman};
  `}
`;


