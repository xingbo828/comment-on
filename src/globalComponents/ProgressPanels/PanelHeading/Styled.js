import styled from 'styled-components';

export const PanelHeadingContainer = styled.li`
  list-style: none;
  background-color: white;
  padding: ${props=>props.theme.spaces.wide};
  ${props=>props.theme.media.greaterThan('md')`
    padding: 2.5rem ${props=>props.theme.spaces.xWide};
  `}
`;
