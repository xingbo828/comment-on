import React from 'react'
import Scroll from 'react-scroll'
import {
  Container,
  NavList,
  NavListItem,
  NavListLink
} from './Styled'

const handleClick = (_node) => {
  return (e) => {
    e.preventDefault()
    const offset = 1
    const nodeScrollTop = _node.getBoundingClientRect().top + offset
    Scroll.animateScroll.scrollMore(nodeScrollTop)
  }
}

const mapItems = (_items, active) => {
  return _items.map((_item, _idx) => {
    return (
      <NavListItem
        active={active === _idx}
        key={_item.name}
      >
        <NavListLink onClick={handleClick(_item.node)} href="#">{_item.name}</NavListLink>
      </NavListItem>
    )
  })
}

const StickyNav = ({ items, active }) => {
  return (
    <Container>
      <NavList>
        {mapItems(items, active)}
      </NavList>
    </Container>
  )
}

export default StickyNav