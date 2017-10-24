import styled from 'styled-components';
import { Button } from '../../globalComponents/Form';


export const Banner = styled.div`
  background-color: ${props=>props.theme.colors.primary};
  color: ${props=>props.theme.colors.offWhite};
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem 2rem;

  ${props=>props.theme.media.greaterThan('md')`
    padding: 11rem 0;
    font-size: 2.2rem;
  `};
`;


