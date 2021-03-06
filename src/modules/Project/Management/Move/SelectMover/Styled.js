import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const appear = keyframes`
  from {
    transform: scale(.5);
  }

  to {
    transform: scale(1);
  }
`;

export const MoverCard = styled.div`
  flex-basis: 100%;
  margin: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.tight};
  ${props=> props.theme.media.greaterThan('sm')`
    flex-basis: 45%;
  `};
`;

export const IsCheckedIndicator = styled.div`
  width: 68px;
  height: 68px;
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
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.base} 0 ${props=>props.theme.spaces.base};
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
  padding: ${props=>props.theme.spaces.tight} 0;
  justify-content: space-around;
`;

export const MoverName = styled.p`
  font-weight: ${props=>props.theme.fontWeights.roman};
  text-align: center;
  margin: ${props=>props.theme.spaces.base} 0;

`;

export const MoverPrice = styled.span`
  font-weight: ${props=>props.theme.fontWeights.medium};
  font-size: 1.5rem;
  &:after {
    content: ' / estimate';
    font-size: .825rem;
    color: ${props=>props.theme.colors.textLight};
  }
`;

export const MoverProfileLink = styled(Link)`
  color: ${props=>props.theme.colors.secondary};
  text-decoration: none;
  font-size: .875rem;
  font-weight: ${props=>props.theme.fontWeights.roman};
  &:after {
    transition: .3s;
    font-family: FontAwesome;
    content: '\f061';
    position: relative;
    left: 5px;
  }

  &:hover {
    &:after {
      left: 10px;
    }
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
  padding-bottom: ${props=>props.theme.spaces.base};
`;
