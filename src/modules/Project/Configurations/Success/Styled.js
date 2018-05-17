import styled from 'styled-components';

export const SuccessContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;

  ${props=> props.theme.media.greaterThan('md')`
    padding: 4rem 0;
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

export const Content = styled.div`
  margin: 2rem 0;
`
