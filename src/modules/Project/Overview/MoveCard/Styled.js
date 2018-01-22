import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-top: ${props=>props.theme.spaces.xWide};
  ${props=> props.theme.media.greaterThan('sm')`
    margin-top: 0;
  `};
`;

export const CardMetaItem = styled.p`
  text-align: center;
`;
