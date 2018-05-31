import Styled from 'styled-components'


export const Heading = Styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;

  ${props=>props.theme.media.greaterThan('sm')`
    font-size: 2rem;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    font-size: 3rem;
    color: ${props=>props.theme.colors.secondary};
  `}
`

export const Tagline = Styled.h2`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: ${props=>props.theme.colors.primary};

  ${props=>props.theme.media.greaterThan('sm')`
    font-size: 1.25rem;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    font-size: 1.5rem;
  `}
`

export const ThinHeroMessage = Styled.div`
  padding: 1.5rem;
  background: white;
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(31,95,252, .6);
  border-bottom: 6px solid ${props=>props.theme.colors.secondaryLight};

  h1 {
    color: white !important;
  }

  ${props=>props.theme.media.between('sm', 'md')`
    left: 8rem;
    right: 8rem;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    display: none;
    border: none;
  `}
`

export const ImagePlaceHolder = Styled.div`
  box-shadow: ${props=>props.theme.boxShadow.small};
  display: block;
  position: relative;
  z-index: -1;
  width: 100%;
  padding-bottom: 75%;
  border-radius: 4px;
  background: url(http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg);
  background-size: cover;

  ${props=>props.theme.media.greaterThan('md')`
    padding-bottom: 100%;
  `}
`

export const WideHeroMessage = Styled.div`
  display: none;

  ${props=>props.theme.media.greaterThan('md')`
    display: block;
  `}
`

export const ImageContainer = Styled.div`
  position: relative;
`
export const Description = Styled.p`
  display: none;
  line-height: 1.5;
  font-size: 1.125rem;
  margin: 0;

  ${props=>props.theme.media.greaterThan('md')`
    display: block;
  `}
`
