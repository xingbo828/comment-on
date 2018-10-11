import styled from 'styled-components';
import Box from '../../globalComponents/Box';


export const Hero = styled(Box)`
  height: 100%;
`

export const ButtonContainer = styled.div`
  text-align: center;
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

export const Divider = styled.div`
  background: linear-gradient(to bottom, #f4f6f9 0%,#ffffff 100%);
  height: 100px;

  ${props=>props.theme.media.greaterThan('md')`
    height: 200px;
  `}
`