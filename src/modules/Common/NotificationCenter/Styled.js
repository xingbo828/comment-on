import styled from 'styled-components';

export const NotificationCenterContainer = styled.a`
  cursor: ${props=>props.enabled ? 'pointer' : 'not-allowed'};
  color: ${props=>props.enabled ? props.theme.colors.textDark : props.theme.colors.textLight};
  display: inline-block;
  position: relative;
  transition: .3s;
  background-color: ${props => props.isOpen ? props.theme.colors.offWhite : 'white'};
  padding-right: ${props => props.theme.spaces.wide};
  padding-left: ${props => props.theme.spaces.tight};
  margin: 0 10px;
  ${props=>props.theme.media.greaterThan('sm')`
    padding-right:  ${props => props.theme.spaces.wide};
    background-color: white;
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

export const NotificationContentContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.offWhite};
  z-index: ${props=>props.theme.zIndex.dropdown};
  padding: ${props=>props.theme.spaces.base};
  display: flex;
  flex-direction: column;
  ${props=>props.theme.media.greaterThan('sm')`
    position: absolute;
    left: auto;
    top: 60px;
    right: 0;
    width: 365px;
    height: 200px;
    box-shadow: 0 2px 15px 0px rgba(0,0,0,.2);
    background-color: white;
  `}
`;
