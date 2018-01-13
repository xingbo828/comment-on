import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotificationContentContainer = styled.ul`
  position: fixed;
  margin: 0;
  top: 60px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.offWhite};
  z-index: ${props=>props.theme.zIndex.dropdown};
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
  > li:not(:last-child) {
    border-bottom: 1px solid ${props=>props.theme.colors.border};
  }
  ${props=>props.theme.media.greaterThan('sm')`
    position: absolute;
    left: auto;
    top: 60px;
    right: 0;
    width: 365px;
    height: 250px;
    box-shadow: 0 2px 15px 0px rgba(0,0,0,.2);
    background-color: white;
    overflow-y: scroll;
  `}
`;

export const NotificationContentItemContainer = styled.li`
  list-style: none;
`;

export const NotificationContentItemLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${props=>props.theme.colors.textDark};
  ${props=>props.theme.media.greaterThan('sm')`
    font-size: .875rem;
    line-height: 250%;
    padding: ${props.theme.spaces.base};

  `}
    &:hover {
      background-color: ${props=>props.theme.colors.offWhite};
    }
`;
