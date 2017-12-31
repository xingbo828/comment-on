import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${props=>props.theme.spaces.tight};
  ${props=> props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.xWide};
  `};
`;

export const ActionContainer = styled.div`
  border-top: 2px dashed ${props=>props.theme.colors.border};
  padding: ${props=>props.theme.spaces.wide};
  display: flex;
  justify-content: center;
  ${props=> props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.xWide};
  `};
`;
