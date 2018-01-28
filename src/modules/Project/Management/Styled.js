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
