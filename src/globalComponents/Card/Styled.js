import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid ${props=>props.theme.colors.border};
  background: white;
  margin: 0;
  padding: 0;
  transition: all .3s;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  width: 100%;
  min-height: 200px;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
    border-color: rgba(0, 0, 0, 0.14);
  }
`;

export const PrimaryCardAction = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(50%);
`;


