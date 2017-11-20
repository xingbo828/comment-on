import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const MapContainer = styled.div`
  width: 100%;

  height: 250px;

  ${props=>props.theme.media.between('sm','md')`
      height: 400px;
  `}

  ${props=>props.theme.media.greaterThan('md')`
      height: 500px;
  `}
`;

export const RouteInfoContainer = styled.div`
  position: absolute;
  right: 50px;
  top: 180px;
  ${props=>props.theme.media.between('sm','md')`
    top: 330px;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    top: 430px;
  `}
  background-color: white;
  color: ${props=>props.theme.colors.primary};
  border-radius: 3px;
  font-weight: ${props=>props.theme.fontWeights.roman};
  text-align: center;
  display: inline-block;
  padding: 6px 10px;
  transition: .5s cubic-bezier(0.720, -0.600, 0.370, 1.650);
  transform: ${props=>props.visible ? 'translateX(0)' : 'translateX(1.5rem)'};
  opacity: ${props=>props.visible ? 1 : 0};
  text-transform: uppercase;
`;



export const InputsContainer = styled.div`
  padding-top: ${props=>props.theme.spaces.wide};
  padding-left: ${props=>props.theme.spaces.tight};
  padding-right: ${props=>props.theme.spaces.tight};
  ${props=>props.theme.media.greaterThan('sm')`
    padding-top: ${props=>props.theme.spaces.wide};
    padding-left: ${props=>props.theme.spaces.xWide};
    padding-right: ${props=>props.theme.spaces.xWide};
  `}
  position: relative;
  &:before {
    font-family: 'FontAwesome';
    content: "\f111\00a0\f111\00a0\f111";
    position: absolute;
    color: #d3d3d3;
    top: 68px;
    font-size: .5rem;
    left: calc(${props=>props.theme.spaces.tight} + 7px);
    ${props=>props.theme.media.greaterThan('sm')`
      left: calc(${props=>props.theme.spaces.xWide} + 7px);
    `}
    width: 5px;
    overflow-wrap: break-word;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: ${props=>props.theme.spaces.wide};
`;
