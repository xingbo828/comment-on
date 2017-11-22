import styled from 'styled-components';


export const Banner = styled.div`
  background-color: ${props=>props.theme.colors.primary};
  color: ${props=>props.theme.colors.offWhite};
  text-align: center;
  padding: 2rem 2rem;

  ${props=>props.theme.media.greaterThan('md')`
    padding: 11rem 0;
  `};
`;


