import styled from 'styled-components';

export const AddressSelectionContainer = styled.div`
  padding: 1rem 0;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const AddressSelectionInner = styled.div`
  border: 1px solid ${props=>props.theme.borderPrimary};
  display: flex;
  padding: 1rem;
`;


export const MapContainer = styled.div`
  flex: 1;
  text-align: center;
`;

export const MapInnerContainer = styled.div`
  width: 400px;
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
  flex: 1;
`;
