import styled from 'styled-components';

export const Container = styled.div``;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;

export const RouteInfoContainer = styled.div`
  padding-top: ${props=>props.theme.spaces.base};
  font-size: .8rem;
`;

export const InputsContainer = styled.div`
  padding-top: ${props=>props.theme.spaces.base};
`;

export const InputContainer = styled.div`
  margin-bottom: ${props=>props.theme.spaces.base};
`;
