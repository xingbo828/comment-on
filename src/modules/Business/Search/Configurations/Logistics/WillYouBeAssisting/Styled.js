import styled from 'styled-components';

export const StyledContainer = styled.div`
 padding: ${props=>props.theme.spaces.tight};
 > div > div > div {
  ${props=>props.theme.media.lessThan('xs')`
    flex: 0 0 100%;
  `}
  ${props=>props.theme.media.greaterThan('xs')`
    flex: 0 0 50%;
  `}
 }
`;




