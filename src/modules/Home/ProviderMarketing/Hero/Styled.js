import Styled from 'styled-components'

export const Image = Styled.div`

  &:after {
    content: '';
    position: absolute;
    width: 120%;
    padding-bottom: 50%;
    background: white;
    border-top-right-radius: 99rem;
    border-top-left-radius: 99rem;
    left: calc(-10%);
    transform-origin: 50% 100%;
    transform: scaleY(.1);
    bottom:0;
    z-index: 0;
  }
`


export const Container = Styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 600px;
  background: center center no-repeat;
  background-image: url(${props=>props.src});
  background-size: cover;
  background-color: ${props=>props.theme.colors.secondaryPale};
  display: flex;
  align-items: center;

  ${props=>props.theme.media.greaterThan('md')`
    height: 850px;  
  `}

  * {
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    width: 120%;
    padding-bottom: 50%;
    background: white;
    border-top-right-radius: 99rem;
    border-top-left-radius: 99rem;
    left: calc(-10%);
    transform-origin: 50% 100%;
    transform: scaleY(.1);
    bottom:0;
    z-index: 0;
  }
`

export const ContentWrapper = Styled.div`
  color: white;
  background: linear-gradient(135deg, rgba(255,255,255,0.11) 0%,rgba(0,0,0,0) 40%);
  padding: 1rem;
  margin: -1rem 0 0 -1rem;
`