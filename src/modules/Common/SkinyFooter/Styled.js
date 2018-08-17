import Styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container  = Styled.div`
  width: 100%;
  border-top: 1px solid ${props=>props.theme.colors.border};
  width: 100%;
`

export const BrandLink = Styled(Link)`
  text-decoration: none;
  color: ${props=>props.theme.colors.textDark};
  font-weight: 600;
  display: inline-block;
  padding: .5rem 1rem;
  float: right;
  font-size: .875rem;
  background-color: ${props=>props.theme.colors.secondaryPale};
  border-radius: 4px;
  &:after: {
    content: '';
    clear: both;
  }
`