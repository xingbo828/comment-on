import styled from 'styled-components';

export const Container = styled.div``;

export const HeadingWrapper = styled.div `
  text-align: center;
  flex: 1;
  margin-bottom: ${prop=>prop.theme.spaces.base};
  ${props=> props.theme.media.greaterThan('md')`
    text-align: left;
    background-color: ${prop=>prop.theme.colors.offWhite};
    padding: ${prop=>prop.theme.spaces.xWide} 0;
  `};
`;

export const CardContainer = styled.div`
  margin-bottom: ${props=>props.theme.spaces.xWide};
  ${props=> props.theme.media.greaterThan('sm')`
    margin-bottom: ${props=>props.theme.spaces.wide};
  `};
`;
