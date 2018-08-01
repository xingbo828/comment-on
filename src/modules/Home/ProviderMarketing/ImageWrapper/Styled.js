import Styled from 'styled-components'


export const Container = Styled.div`
  position: relative;
  background: center center no-repeat;
  background-image: linear-gradient(to right, rgba(38,115,253,.9) 0%,rgba(78, 171,255,.9) 100%), url(https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FimageA.jpg?alt=media&token=8f75c17f-423f-43ac-8e11-818798e9665e);
  background-size: cover;
  ${props=>props.overlapTop && 'margin-top: -4rem; padding-top: 4rem;'}
  ${props=>props.overlapBottom && 'margin-bottom: -4rem; padding-bottom: 4rem;'}
  z-index: 1;
`