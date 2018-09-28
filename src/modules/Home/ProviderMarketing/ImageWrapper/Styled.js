import Styled from 'styled-components'


export const Container = Styled.div`
  position: relative;
  background: center center no-repeat;
  background-image: linear-gradient(to right, rgba(38,115,253,.9) 0%,rgba(78, 171,255,.9) 100%), url(${props=>props.src});
  background-size: cover;
  ${props=>props.overlapTop && 'margin-top: -4rem; padding-top: 4rem;'}
  ${props=>props.overlapBottom && 'margin-bottom: -4rem; padding-bottom: 4rem;'}
  z-index: 0;
`