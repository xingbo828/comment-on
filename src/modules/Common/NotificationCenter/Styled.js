import styled from 'styled-components';

export const NotificationCenterContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: .3s;
  border-right: 1px solid ${props=>props.theme.colors.border};
  border-left: 1px solid ${props=>props.theme.colors.border};
  background-color: ${props => props.isOpen ? props.theme.colors.offWhite : 'white'};

  ${props => props.isOpen && `
    z-index: 99;
  `}

  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: ${props => props.theme.zIndex.dropdown + 1};
    right: 0;
    top: 50px;
    height: ${props => props.isOpen ? '20px' : '0px'};
    left: 0;
    background: ${props => props.theme.colors.offWhite};
  }

  ${props=>props.theme.media.greaterThan('sm')`
    background-color: white;
    transform: ${props => props.isOpen ? 'scale(1.01)' : 'scale(1)'};
    box-shadow: ${props => props.isOpen ? '0 2px 15px 0px rgba(0,0,0,.2)' : '0 2px 15px 0px rgba(0,0,0,0)'};

    &:after {
      top: 70px;
      background: white;
    }
  `}
`;

export const NotificationClickWrapper = styled.div`
  padding: 0 1rem;

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0 1.5rem;
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
    font-weight: 400;
  `}
`;


