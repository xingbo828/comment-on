import styled from 'styled-components';
import { Button } from '../../globalComponents/Form';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Banner = styled.div`

`;

export const SearchWrapper = styled.div`
  label {
    border-right-width: 0;
  }
  flex: 5;
`;

export const SearchWrapperWithRadius = styled(SearchWrapper)`
  label {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
`;

export const SearchButton = styled(Button)`
  flex: 1;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const Form = styled.form`
  width: 1024;
  margin: 0 auto;
  display: flex;
`;


