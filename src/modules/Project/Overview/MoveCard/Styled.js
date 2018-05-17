import styled from 'styled-components';


export const CardMeta = styled.div`
  padding: 1.5rem;
`;

export const CardMetaItemProjectName = styled.div`
  font-weight: ${props=>props.theme.fontWeights.light};
  padding-bottom:  ${props=>props.theme.spaces.tight};
`;

export const CardMetaItemStatus = styled.div`
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing; .05em;
  color: ${props=>props.status === 'completed' ? props.theme.colors.success : props.theme.colors.primary};
`;
