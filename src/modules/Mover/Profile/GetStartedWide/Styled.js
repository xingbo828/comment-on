import Styled from 'styled-components'

export const Container = Styled.div`
  position: sticky;
  top: 2rem;
  display: none;

  ${props=>props.theme.media.greaterThan('md')`
    display: block;
  `};
`

export const Message = Styled.div`
  border-top: 1px solid ${props=>props.theme.colors.border};
  text-align: center;
`