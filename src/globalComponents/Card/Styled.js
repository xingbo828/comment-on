import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  margin: 0;
  padding: 0;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
`;

export const ChildrenContainer = styled.div`
  min-height: ${props=>props.loading ? '200px' : '0px'};
`;

export const PrimaryCardAction = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(50%);
`;


