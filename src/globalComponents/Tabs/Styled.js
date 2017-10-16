import styled from 'styled-components';

export const TabContainer = styled.div`
  height: ${props => props.containerHeight}px;
`;

export const TabBar = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderPrimary};
`;

export const TabBarLinkContainer = styled.li`
  list-style: none;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  ${props => {
    if(props.isActive){
      return `
        font-weight: bold;
        color: ${props.theme.colors.primary};
      `;
    }
  }}
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const TabBarLinkInk = styled.div`
  height: 2px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  transition: .3s;
  position: absolute;
  left: 0;
  bottom: -1px;
  transform: scale(0);
  ${props => {
    if(props.isActive){
      return `
        transform: scale(1);
      `;
    }
  }}
`;

export const TabPanelsContainer = styled.div`
  padding: 10px 15px;
  position: relative;
`;

export const TabPanelContainer = styled.div`
  transition: .3s;
  width: 100%;
  opacity: 0;
  position: absolute;
  transform: translateX(20px);
  visibility: hidden;
  ${props => {
    if(props.isActive){
      return `
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      `;
    }
  }}
`;
