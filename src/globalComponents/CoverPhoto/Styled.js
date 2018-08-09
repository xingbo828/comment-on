import Styled from 'styled-components'

export const Image = Styled.div`
  height: 150px;
  background: url(${props=>props.src}) ${props=>props.theme.colors.offWhite} center center no-repeat;
  background-size: cover; 

  ${props=>props.theme.media.greaterThan('sm')`
    margin-bottom: -4rem;
    height: 350px;
  `};
`