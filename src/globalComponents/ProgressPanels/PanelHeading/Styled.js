import styled from 'styled-components';

export const PanelHeadingContainer = styled.li`
  list-style: none;
  background-color: white;
  padding: 0 ${props=>props.theme.spaces.wide};
  ${props=>props.theme.media.greaterThan('md')`
    padding: 0 ${props=>props.theme.spaces.xWide};
  `}
`;
