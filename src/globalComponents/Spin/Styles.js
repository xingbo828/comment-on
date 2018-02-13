import styled from 'styled-components';

// Full Screen Spinner
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
  filter: blur(2.5px);
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index: ${props=>props.theme.zIndex.modalBackdrop};
`;


// Spin container
export const StyleContainer = styled.div`
  position: relative;
`;

export const ChildrenBlurWrapper = styled.div`
  transition: .3s;
  ${props => {
    if(props.loading) {
      return `
        opacity: .3;
        filter: blur(2.5px);
      `;
    }
  }}
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${props=> props.theme.zIndex.spinner};
`;

export const SpinnerWrapperInner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -16px;
`;

