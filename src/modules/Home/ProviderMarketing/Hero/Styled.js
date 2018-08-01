import Styled from 'styled-components'

export const Image = Styled.div`
  position: relative;
  width: 100%;
  height: 768px;
  background: center center no-repeat;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FimageA.jpg?alt=media&token=8f75c17f-423f-43ac-8e11-818798e9665e);
  background-size: cover;
  margin-bottom: -275px;

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

export const Card = Styled.div`
  margin: 0 auto;
  padding: 3rem 2rem;
  background: ${props=>props.theme.gradients.secondary.horizontal};
  border-radius: 1rem;
  opacity .95;
  color: white;
  box-shadow: ${props=>props.theme.boxShadow.large};

  ${props=>props.theme.media.greaterThan('md')`

  `};
`

export const Container = Styled.div`
  

`