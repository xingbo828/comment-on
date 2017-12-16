import styled from 'styled-components';


export const ConversationHeaderCloseBtn = styled.button`
  z-index: ${props=>props.theme.zIndex.popover};
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-image: none;
  border: 1px solid ${props=>props.theme.colors.border};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: ${props=>props.theme.colors.secondary};
    color: white;
  }
`;
