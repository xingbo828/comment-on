import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotificationContentContainer = styled.ul`
  position: fixed;
  margin: 0;
  top: 62px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.offWhite};
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;

  > li:not(:last-child) {
    border-bottom: 1px solid ${props=>props.theme.colors.border};
  }

  ${props=>props.theme.media.greaterThan('sm')`
    position: absolute;
    justify-content: center;
    left: auto;
    top: 80px;
    display: block;
    right: 0;
    width: 400px;
    height: 350px;
    box-shadow: 0 2px 15px 0px rgba(0,0,0,.2);
    background-color: white;
    overflow-y: auto;
  `}
`;

export const NotificationContentItemContainer = styled.li`
  list-style: none;
`;

export const NotificationContentItemLink = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;
  color: ${props=>props.theme.colors.textDark};
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.xWide} ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.base};
  font-size: .875rem;
  line-height: 250%;

  &:after {
    content:'\f054';
    font-family: 'FontAwesome';
    position: absolute;
    right: ${props=>props.theme.spaces.wide};
    top: 40%;
  }

  &:hover {
    background-color: ${props=>props.theme.colors.offWhite};
  }

  ${props=>props.theme.media.greaterThan('sm')`
    padding: ${props.theme.spaces.base};
    &:after {
      content:'';
    }
  `}
`;
