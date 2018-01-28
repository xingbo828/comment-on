import styled from 'styled-components';


export const CardMeta = styled.div`
  text-align: center;
  padding: ${props=>props.theme.spaces.wide} 0;
`;

export const CardMetaItemProjectName = styled.div`
  font-weight: ${props=>props.theme.fontWeights.light};
  padding-bottom:  ${props=>props.theme.spaces.tight};
`;

export const CardMetaItemStatus = styled.div`
  font-size: .875rem;
  color: ${props=>props.status === 'completed' ? props.theme.colors.success : props.theme.colors.primary};
`;
