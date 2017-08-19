import styled from 'styled-components';
import {
  media,
  gutterWidth
} from '../../../foundation/Variables';


export const Container = styled.div`
  display: flex;

  ${media.fromMedium`
    padding: 0 ${gutterWidth} 50px;
    margin: 0 auto;
    max-width: 1200px;
  `}
`;

export const Form = styled.form`
  width: 100%;
  ${media.fromMedium`
    width: 60%;
  `}
`;

export const AddressDetailContainer = styled.div`
  display: flex;
`;
export const AddressDetailCity = styled.div`
  padding: 0 5px;
  flex: 6;
`;

export const AddressDetailProv = styled.div`
  padding: 0 5px;
  flex: 2;
`;

export const AddressDetailPostalCode = styled.div`
  padding: 0 5px;
  flex: 4
`;
