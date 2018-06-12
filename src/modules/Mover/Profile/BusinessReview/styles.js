import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 ${props=>props.theme.spaces.base};
`;

export const LogoWrapper = styled.div`
  flex: 6;
`;

export const DetailWrapper = styled.div`
  flex: 16;
  padding-left: ${props=>props.theme.spaces.base};
`;


export const Logo = styled.img`
  width: 100%;
`;

export const BusinessName = styled.span`
  font-weight: ${props=>props.theme.fontWeights.roman};
`;

