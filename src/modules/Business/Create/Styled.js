import styled from 'styled-components';
import {
  media,
  borderPrimary,
  gutterWidth
} from '../../../foundation/Variables';


export const Container = styled.div`
  display: flex;

  ${media.fromMedium`
    padding: 0 ${gutterWidth};
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
