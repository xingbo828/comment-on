import Styled from 'styled-components'


export const Heading = Styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: white;

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

export const HeroMessage = Styled.div`
  margin-top: -40px !important;
  padding: 1.5rem;
  bottom: 0;
  background: rgba(31,95,252, .6);
  border-bottom: 6px solid ${props=>props.theme.colors.secondaryLight};

  ${props=>props.theme.media.greaterThan('md')`
    margin-top: 0 !important;
    border: none;
    padding: 0;
    margin: 0;
    background: none;
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
  background: no-repeat url(https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmoving_items.png?alt=media&token=220f1519-9a71-46cf-b9dc-c9394bcd233f);
  // background: url(http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg);
  background-size: cover;

  ${props=>props.theme.media.greaterThan('md')`
    padding-bottom: 100%;
  `}
`

export const HeroImage = Styled.img`
  height: 100%;
  
  ${props=>props.theme.media.greaterThan('md')`
    position: absolute;
    left: 0;
    top: 0;
  `}
`

export const ImageContainer = Styled.div`
  z-index: -1;
  position: relative;
  height: 200px;
  text-align: center;

  ${props=>props.theme.media.greaterThan('md')`
    height: 450px;
    text-align: left;
  `}
`
export const HeroDescription = Styled.div`
  line-height: 1.5;
  margin: 0;
  padding: 1.5rem 1.5rem 0;
  background: white;
  z-index: 1;
  // color: ${props=>props.theme.colors.textLight};

  p {
    margin: 0;
    padding: 0;
  }

  ${props=>props.theme.media.greaterThan('md')`
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    font-size: 1.125rem;
  `}
`
