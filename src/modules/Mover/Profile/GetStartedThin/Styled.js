import Styled from 'styled-components'
import Button from '../../../../globalComponents/Form/Button'
import Box from '../../../../globalComponents/Box'

export const Container = Styled.div`
  margin: 4rem 0 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,1) 100%);
  position: sticky;
  bottom: 0;

  ${props=>props.theme.media.greaterThan('xs')`
    border-top: 1px solid ${props=>props.theme.colors.border};
    background: white;
  `};

  ${props=>props.theme.media.greaterThan('md')`
    visibility: hidden;
  `};
`

export const Messaging = Styled(Box)`

  ${props=>props.theme.media.lessThan('xs')`
    display: none !important;
  `};
`

export const Action  = Styled(Button)`
  margin-left: auto;
  width: 100%;

  ${props=>props.theme.media.greaterThan('xs')`
    width: auto;
  `};
`