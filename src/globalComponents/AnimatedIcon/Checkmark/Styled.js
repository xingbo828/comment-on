import styled, { keyframes } from 'styled-components';

const checkmark = keyframes`
  0% {
    stroke-dashoffset: 50px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const checkmarkCircle = keyframes`
  0% {
      stroke-dashoffset: 240px
  }
  100% {
      stroke-dashoffset: 480px
  }
`;

export const SvgWrapper = styled.svg`
  path {
      animation: ${checkmark} 0.25s ease-in-out 1.2s backwards;
  }
  circle {
      animation: ${checkmarkCircle} 0.6s ease-in-out 0.5s backwards;
  }
`;
