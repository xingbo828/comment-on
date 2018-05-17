import styled from 'styled-components';

export const ProgressPanelsContainer = styled.ul`
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 4px;
  background-color: white;
  box-shadow: ${props=>props.theme.boxShadow.large};
  > li: not(:first-child) {
    border-top: 1px solid ${props=>props.theme.colors.border};
  }
`;
