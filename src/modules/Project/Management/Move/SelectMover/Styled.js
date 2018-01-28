import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    transform: translateY(50%) scale(0);
  }

  to {
    transform: translateY(50%) scale(1);
  }
`;

export const MoverCard = styled.div`
  flex-basis: 100%;
  margin: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.tight};
  ${props=> props.theme.media.greaterThan('sm')`
    flex-basis: 45%;
  `};

  ${props=> props.theme.media.greaterThan('lg')`
    flex-basis: 30%;
  `};
`;

export const IsCheckedIndicator = styled.div`
  width: 36px;
  height: 36px;
  color: white;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.theme.colors.primary};
  animation: ${appear} .3s cubic-bezier(0.720, -0.600, 0.370, 1.650) 1;
  animation-fill-mode: forwards;
`;

export const InnerCardContainer = styled.div`
  padding: ${props=>props.theme.spaces.base};
`;

export const MoverLogo = styled.div`
  height: 130px;
  border-bottom: 1px dashed ${props=>props.theme.colors.border};
  padding-bottom: ${props=>props.theme.spaces.base};
  display: flex;
  align-items: center;
`;

export const MoverLogoImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  margin: 0 auto;
`;

export const MoverInfoBar = styled.div`
  display: flex;
  padding: ${props=>props.theme.spaces.base} 0;
  justify-content: space-between;
`;

export const MoverName = styled.p`
  font-weight: ${props=>props.theme.fontWeights.roman};
  text-align: center;
  margin: ${props=>props.theme.spaces.base} 0 0 0;

`;

export const MoverPrice = styled.span`
  flex: 3;
  font-weight: ${props=>props.theme.fontWeights.medium};
  font-size: 1.5rem;
  &:after {
    content: ' / estimate';
    font-size: .825rem;
    color: ${props=>props.theme.colors.textLight};
  }
`;

export const MoverMsg = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props=>props.theme.colors.textLight};
  transition: .3s;
  &:hover {
    color: ${props=>props.theme.colors.textDark};
    transform: scale(1.1);
  }
`;

export const MoverCardList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  width: 100%;
`;

export const SelectMoverFormAction = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: ${props=>props.theme.spaces.wide} 0;
`;
