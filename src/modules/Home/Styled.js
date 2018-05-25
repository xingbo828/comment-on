import styled from 'styled-components';
import Box from '../../globalComponents/Box';


export const Hero = styled(Box)`
  height: 100%;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`

export const ImagePlaceHolder = styled.div`
  display: none;
  position: relative;
  z-index: -1;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 4px;
  background: url(http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg);
  background-size: cover;

  ${props=>props.theme.media.greaterThan('md')`
    display: block;
  `}
`

export const HeroInner = styled.div`
  width: 50%;
`
export const Logo = styled.img`
  height: 35px;
`

export const Header = styled(Box)`
  justify-content: space-between;
`

export const SectionContainer = styled.div`
  margin: 10rem 0;
`

