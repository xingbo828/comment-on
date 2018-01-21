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
