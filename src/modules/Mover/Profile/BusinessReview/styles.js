import styled from 'styled-components';
import Box from '../../../../globalComponents/Box';


export const Container = styled.div`
  &:not(:last-of-type) {
    margin: 0 0 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props=>props.theme.colors.border};
  }
`

export const ContainerBox = styled(Box)`
  align-items: center;
`;

export const DetailWrapper = styled.div`
  flex: 16;
  padding-left: ${props=>props.theme.spaces.base};
`;


export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
`;

export const BusinessName = styled.span`
  font-weight: ${props=>props.theme.fontWeights.roman};
`;

