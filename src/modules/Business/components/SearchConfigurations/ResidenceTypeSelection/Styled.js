import styled from 'styled-components';

export const ResidenceTypeSelectionContainer = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  margin-bottom: ${props=>props.theme.spaces.wide};
`;

export const ResidenceTypeContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ResidenceType = styled.li`
  list-style: none;
`;

export const ChildrenTypeContainer = styled.ul``;

export const ChildContainer = styled.li`
  list-style: none;
`;


export const Label = styled.label`
  font-size: 1.5rem;
  display: inline-block;
  font-weight: ${props=>props.theme.fontWeights.medium};
  margin-bottom: ${props=>props.theme.spaces.wide};
`;
