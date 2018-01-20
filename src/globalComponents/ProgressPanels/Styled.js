import styled from 'styled-components';

export const ProgressPanelsContainer = styled.ul`
  padding: 0;
  margin: 0;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
  > li: not(:first-child) {
    border-top: 1px solid ${props=>props.theme.colors.border};
  }
`;
