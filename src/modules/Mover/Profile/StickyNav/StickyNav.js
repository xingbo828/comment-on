import React from 'react'
import Scroll from 'react-scroll'
import {
  Container,
  NavList,
  NavListItem
} from './Styled'

const handleClick = (_node) => {
  return () => {
    const offset = 1;
    const nodeScrollTop = _node.getBoundingClientRect().top + offset
    Scroll.animateScroll.scrollMore(nodeScrollTop)
  }
}

const mapItems = (_items, active) => {
  return _items.map((_item, _idx) => {
    return (
      <NavListItem
        onClick={handleClick(_item.node)}
        active={active === _idx}
        key={_item.name}
      >
        {_item.name}
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