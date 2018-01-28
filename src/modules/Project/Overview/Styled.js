import styled from 'styled-components';

export const HeadingWrapper = styled.div `
  text-align: center;
  flex: 1;
  ${props=> props.theme.media.greaterThan('md')`
    text-align: left;
    background-color: ${prop=>prop.theme.colors.offWhite};
    padding: ${prop=>prop.theme.spaces.xWide} 0;
    margin-bottom: ${prop=>prop.theme.spaces.xWide};
  `};
`;

export const CardContainer = styled.div`
  margin-top: ${props=>props.theme.spaces.xWide};
  ${props=> props.theme.media.greaterThan('sm')`
    margin-top: ${props=>props.theme.spaces.wide};
  `};
`;
