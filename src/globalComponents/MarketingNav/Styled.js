import Styled from 'styled-components'

export const Container = Styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background: rgba(255,255,255, .9);
`

export const Menu = Styled.div`
  display: none;
  flex-direction: column;
  padding: 2rem 0 0;
  overflow-y: scroll;
  height: calc(100vh - 60px);

  ${props=>props.visible && `
    display: flex;
    border-top: 1px solid ${props.theme.colors.border};
  `}

  ${props=>props.theme.media.greaterThan('md')`
    display: flex !important;
    height: auto;
    flex-direction: row;
    padding: 0;
    margin-left: auto;
    border: none !important;
    overflow-y: hidden;
  `};
`

export const MenuList = Styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${props=>props.theme.media.greaterThan('md')`
    margin: auto;
    flex-direction: row;
  `};
`

export const MenuListItem = Styled.li`
  list-style-type: none;
  margin: 0 0 2rem;

  ${props=>props.theme.media.greaterThan('md')`
    margin: auto;
    flex-direction: row;
    margin-left: auto;
    margin: 0 2rem 0 0;
  `};
`

export const InnerContainer = Styled.div`
  display: flex;
  flex-direction: column;

  ${props=>props.theme.media.greaterThan('md')`
    flex-direction: row;
  `};
`

export const InnerWrapper = Styled.div`
  height: 60px;
  display: flex;
  align-items: center;

  ${props=>props.theme.media.greaterThan('md')`
    height: 100px;
  `};
`

export const LogoWrapper = Styled.div`

`

export const Toggler = Styled.div`
  margin-left: auto;
  cursor: pointer;

  &:after {
    content: 'Menu';
    font-weight: 600;
    font-size: 1.125rem;
    color: ${props=>props.theme.colors.secondary};

    ${props=>props.visible && `
      font-family: 'FontAwesome';
      content: '\f00d';
      font-size: 1.5rem;
    `}
  }

  ${props=>props.theme.media.greaterThan('md')`
    display: none;
  `};
`