import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 3px;
  box-shadow: ${props=>props.theme.boxShadow.large};
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
  right: 60px;
  top: 190px;
  ${props=>props.theme.media.between('sm','md')`
    top: 340px;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    top: 440px;
  `}
  background-color: white;
  color: ${props=>props.theme.colors.primary};
  font-weight: ${props=>props.theme.fontWeights.roman};
  text-align: center;
  display: inline-block;
  padding: 6px 10px;
  transition: .5s cubic-bezier(0.720, -0.600, 0.370, 1.650);
  transform: ${props=>props.visible ? 'translateX(0)' : 'translateX(1.5rem)'};
  transition-delay: .5s;
  opacity: ${props=>props.visible ? 1 : 0};
  text-transform: uppercase;
`;



export const InputsContainer = styled.div`
  padding: 2rem 2rem .5rem;
  position: relative;

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 3rem;
  `}
`;

export const InputContainer = styled.div`
  margin-bottom: ${props=>props.theme.spaces.wide};
  box-shadow: 0 -1px 0 inset ${props=>props.theme.colors.border};
`;
