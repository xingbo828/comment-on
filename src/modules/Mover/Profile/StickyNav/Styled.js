import Styled from 'styled-components'

export const Container = Styled.nav`
  background: white;  
  line-height: 4rem;
  position: sticky;
  margin: 0 -2rem;
  top: 0;
  z-index: 99;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  
`

export const NavList = Styled.ul`\
  list-style-type: none;
  padding: 0;
  margin: 0 2rem;
  border-bottom: 1px solid ${props=>props.theme.colors.border};
`

export const NavListItem = Styled.li`
  position: relative;
  display: inline-block;
  margin-right: 1.5rem;
  font-weight: 600;
  height: 4rem;
ß
  &:after {
    transition: .3s;
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    display: block;
    bottom: -2px;
    height: 3px;
    background: ${props=>props.theme.colors.primary};
    transform: ${props=>props.active ? 'scaleX(1)' : 'scaleX(0)'};
  }
`

export const NavListLink = Styled.a`
  text-decoration: none;
  color: ${props=>props.theme.colors.textDark};
`