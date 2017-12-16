import styled from 'styled-components';

export const ConversationContainer = styled.div`
  background-color: ${props=>props.theme.colors.offWhite};
  z-index: ${props=>props.visible ? props.theme.zIndex.popover : props.theme.zIndex.negative};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  transition: .5s ease-in-out;
  opacity: ${props=>props.visible ? '1': '0'};
  transform: ${props=>props.visible ? 'translateX(0)': 'translateX(100vw)'};

  ${props=>props.theme.media.greaterThan('md')`
    width: 420px;
    transform: ${props=>props.visible ? 'translateX(0)': 'translateX(420px)'};
  `}

`;
