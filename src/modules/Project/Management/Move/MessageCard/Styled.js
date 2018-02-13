import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MessageCardContainer = styled.div`
  margin-top: ${props=>props.theme.spaces.xWide};
  margin-bottom: ${props=>props.theme.spaces.base};
  ${props=> props.theme.media.greaterThan('md')`
    margin-top: 0;
  `};
`;

export const CardHeader = styled.div`
  padding: ${props=>props.theme.spaces.wide};
  padding-bottom: 0;
`;

export const CardHeaderInner = styled.div`
  border-bottom: 1px dashed ${props=>props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  padding-bottom:  ${props=>props.theme.spaces.wide};
`;

export const CardHeaderTitle = styled.span`
  font-weight: ${props=>props.theme.fontWeights.roman};
  line-height: 20px;
`;

export const CardHeaderUnread = styled.span`
  color: ${props=>props.theme.colors.danger};
  font-weight: ${props=>props.theme.fontWeights.roman};
  font-size: .675rem;
  line-height: 20px;
  padding-right: ${props=>props.theme.spaces.base};
`;

export const CardBody = styled.ul`
  padding: 0;
  margin: 0;
  padding: ${props=>props.theme.spaces.wide};
`;

export const MessageCardItemContainer = styled.li`
  list-style: none;
  font-size: .875rem;
  padding: ${props=>props.theme.spaces.base} 0;
`;

export const MessageCardItemLink = styled(Link)`
  color: ${props=>props.theme.colors.textDark};
  position: relative;
  &:after {
    transition: .3s;
    font-family: FontAwesome;
    content: '\f061';
    position: absolute;
    right: 0px;
    color: ${props=>props.theme.colors.textLight};
  }

  &:hover {
    &:after {
      color: ${props=>props.theme.colors.textDark};
      right: -5px;
    }
  }
`;

export const MessageCardItemName = styled.span`
  font-weight: ${props=>props.theme.fontWeights.roman};
`;
