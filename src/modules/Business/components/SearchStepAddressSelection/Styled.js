import styled from 'styled-components';

export const AddressSelectionContainer = styled.div`
  padding-bottom: ${props=>props.theme.spaces.base};
`;
export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const AddressSelectionInner = styled.div`
  border: 1px solid ${props=>props.theme.borderPrimary};
  padding: ${props=>props.theme.spaces.base};
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide};
  `}
`;


export const MapContainer = styled.div`
  text-align: center;
`;

export const MapInnerContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin: 0 auto;
  ${props=>{
    if(props.showMapPlaceHolder) {
      return `
        background-color: rgba(0,0,0,.15);
      `;
    }
  }}
`;

export const InputContainer = styled.div`
  visibility: ${props=>props.isLoading ? 'hidden': 'visible'};
`;
