import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-bottom: ${props=>props.theme.spaces.xWide};
  ${props=> props.theme.media.greaterThan('sm')`
    margin-bottom: ${props=>props.theme.spaces.wide};
  `};
`;
