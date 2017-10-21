import styled from 'styled-components';

export const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const SpinWrapper = styled.div`
  position: relative;
  z-index: ${props=>props.theme.zIndex.modal};
  top: 45%;
  text-align: center;
`;

export const FullScreenDrop = styled.div`
  background-color: ${props=>props.theme.colors.offWhite};
  opacity: .7;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index: ${props=>props.theme.zIndex.modalBackdrop};
`;

