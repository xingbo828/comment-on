import styled from 'styled-components';

const FramedContent = styled.div`
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
  width: 100%;
  margin: ${props=>props.theme.spaces.base} auto;
  z-index: 1;
  padding: ${props=>props.theme.spaces.base};

  ${props=>props.theme.media.greaterThan('md')`
    width: calc(1000%/12);
    margin: ${props=>props.theme.spaces.wide} auto;
    padding: ${props=>props.theme.spaces.xWide};
  `}
`;


export default {
  FramedContent
};
