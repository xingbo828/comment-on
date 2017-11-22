import styled from 'styled-components';

export const RadioBlockContainer = styled.div`
  padding: 1rem 1rem 1rem 0;
`;

export const RadioBlockContainerInner = styled.label`
  display: block;
  border: 1px solid;
  border-color: ${props=>props.checked ? props.theme.colors.border : 'rgba(211, 211, 211, .3)'};
  border-radius: 5px;
  cursor: pointer;
  padding: 2.5rem 3.5rem;
`;
