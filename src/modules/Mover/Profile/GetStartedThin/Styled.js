import Styled from 'styled-components'
import Button from '../../../../globalComponents/Form/Button'
import Box from '../../../../globalComponents/Box'

export const Container = Styled.div`
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 35%,rgba(255,255,255,1) 100%);
  position: sticky;
  bottom: 0;
  padding: 3rem 0 1rem;

  ${props=>props.theme.media.greaterThan('md')`
    display: none;
  `};
`

export const Messaging = Styled(Box)`

  ${props=>props.theme.media.lessThan('xs')`
    display: none !important;
  `};
`

export const Action  = Styled(Button)`
  width: 100%;
  border-radius: 4px;
`