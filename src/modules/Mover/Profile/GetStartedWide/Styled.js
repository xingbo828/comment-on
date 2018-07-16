import Styled from 'styled-components'

export const Container = Styled.div`
  position: sticky;
  top: -2rem;
  display: none;

  ${props=>props.theme.media.greaterThan('md')`
    display: block;
  `};
`