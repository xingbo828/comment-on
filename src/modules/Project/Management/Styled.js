import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  padding: ${props=>props.theme.spaces.tight};
  ${props=>props.theme.media.greaterThan('md')`
    width: calc(1000%/12);
    padding: ${props=>props.theme.spaces.wide};
  `}
`;
