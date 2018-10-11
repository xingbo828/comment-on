import Styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container  = Styled.div`
  width: 100%;
  width: 100%;
  padding: 2.5rem 0;
  background: ${props=>props.theme.colors.secondary};
`

export const BrandLink = Styled(Link)`
  text-decoration: none;
  color: ${props=>props.theme.colors.textDark};
  font-weight: 600;
  display: inline-block;
  padding: .5rem 1rem;
  font-size: .875rem;
  background-color: white;
  box-shadow: ${props=>props.theme.boxShadow.small};
  border-radius: 4px;
  &:after: {
    content: '';
    clear: both;
  }

  ${props=>props.theme.media.greaterThan('sm')`
    float: right;
  `}
`

export const Menu = Styled.ul`
  padding: 0 0 1rem;
  margin: 0;
  list-style-type: none;

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0;
  `}
`

export const MenuItem = Styled.li`
  margin: 0 0 1rem;

  ${props=>props.theme.media.greaterThan('sm')`
    display: inline-block;
    margin: 0 1rem 0 0;
    
    &:not(:last-of-type) {
      &:after {
        font-family: 'FontAwesome';
        content: '\\2022';
        margin: 0 0 0 1rem;
        font-size: .75rem;
        color: white;
      }
    }
  `}
`

export const MenuItemLink = Styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
`