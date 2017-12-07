import styled from 'styled-components';

export const TabContainer = styled.div`
  height: ${props => props.containerHeight}px;
`;

export const TabBar = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  flex-wrap: wrap;
`;

export const TabBarLinkContainer = styled.li`
  list-style: none;
  padding: ${props=>props.theme.spaces.tight} ${props=>props.theme.spaces.base};
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.wide};
  `}
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
  transition: .5s;
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

  position: relative;
`;

export const TabPanelContainer = styled.div`
  transition: .5s;
  left: 0;
  right: 0;
  opacity: 0;
  position: absolute;
  transform: translateX(32px);
  visibility: hidden;
  padding: ${props=>props.theme.spaces.tight};
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.base};
  `}
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
