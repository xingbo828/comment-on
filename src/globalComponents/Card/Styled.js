import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  transition: ${props=>props.clickable ? 'transform 150ms ease-out': 'none' };
  margin: 0;
  padding: 0;
  border-radius: 4px;
  position: relative;
  cursor: ${props=>props.clickable ? 'pointer': 'default' };
  width: 100%;
  box-shadow: ${props=>props.theme.boxShadow.large};
`;

export const ChildrenContainer = styled.div`
  min-height: ${props=>props.loading ? '200px' : '0px'};
`;

export const PrimaryCardAction = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(50%);
`;


