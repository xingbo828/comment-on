import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import _ from 'lodash'
import ReactDOM from 'react-dom'


const Element = Styled.div`
  width: 100%;
  z-index: 99;
  background: red';
  transition: top .3s;
`

class StickyBar extends React.Component {

  static get propTypes() {
    return {
      isSticky: PropTypes.bool,
      fixToBottom: PropTypes.bool,
      offsetTop: PropTypes.number,
      children: PropTypes.any
    }
  }

  static get defaultProps() {
    return {
      offsetTop: 0,
      isSticky: true,
      children: <div />,
      fixToBottom: false
    }
  }

  constructor(_props) {
    super(_props)
    this.childNodes = []
    this.window = window
    this.ReactDOM = ReactDOM
    this.state = {
      isFixed: false,
      containerHeight: 0
    }
  }

  componentDidMount() {
    this.setState({ isFixed: this.isFixed() })
    this.setContainerHeight()
    this.onScroll = _.throttle(this.handleScroll.bind(this), 25)
    this.onResize = _.throttle(this.handleResize.bind(this), 25)
    this.window.addEventListener('scroll', this.onScroll)
    this.window.addEventListener('resize', this.onResize)
  }

  componentDidUpdate() {
    this.setContainerHeight()
  }

  componentWillUnmount() {
    this.window.removeEventListener('scroll', this.onScroll)
    this.window.removeEventListener('scroll', this.onResize)
  }

  setContainerHeight() {
    const containerHeight = this.getChildrenHeight()
    if (containerHeight !== this.state.containerHeight) {
      this.setState({ containerHeight })
    }
  }

  setNode(_index) {
    return (_node) => {
      this.childNodes[_index] = _node
    }
  }

  getChildrenHeight() {
    return this.childNodes.reduce((_last, _node) => {
      if (_node) {
        return _last + this.ReactDOM.findDOMNode(_node).offsetHeight
      }
      return _last
    }, 0)
  }

  handleScroll() {
    const isFixed = this.isFixed()
    // Only set state if a change has occured;
    if (this.state.isFixed !== isFixed) {
      this.setState({ isFixed: this.isFixed() })
    }
  }

  handleResize() {
    this.setContainerHeight()
  }

  isFixed() {
    if (!this.props.isSticky) {
      return false
    }
    if (this.props.fixToBottom) {
      return this.isFixedBottom()
    }
    return this.isFixedTop()
  }

  isFixedTop() {
    if (this.container) {
      const scrollY = this.window.pageYOffset
      const extraOffset = this.props.offsetTop
      if (scrollY > this.container.offsetTop - extraOffset) {
        return true
      }
    }
    return false
  }

  isFixedBottom() {
    if (this.container) {
      const { pageYOffset } = this.window
      const viewportInnerHeight = this.window.innerHeight
      const posFromViewportBottom = pageYOffset + viewportInnerHeight
      const containerOffsetHeight = this.container.offsetHeight
      const containerOffsetTop = this.container.offsetTop
      const containerPosition = containerOffsetHeight + containerOffsetTop

      if (containerPosition > posFromViewportBottom) {
        return true
      }
    }

    return false
  }

  mapChildren(_children) {
    this.childNodes.length = 0
    const children = React.Children.map(_children, (_child, _index) => {
      return React.cloneElement(_child, {
        ref: this.setNode(_index),
        updateParentHeight: this.setContainerHeight.bind(this),
        isFixed: this.state.isFixed
      })
    })
    return children;
  }

  render() {
    const { offsetTop } = this.props
    const position = this.state.isFixed ? 'fixed' : 'static'
    const positionProperty = this.props.fixToBottom ? 'bottom' : 'top'
    const minHeight = this.state.containerHeight
    return (
      <div
        ref={(ref) => { this.container = ref }}
        style={{ minHeight }}
      >
        <Element
          style={{
            position,
            [positionProperty]: 0 + offsetTop
          }}
        >
          {this.mapChildren(this.props.children)}
        </Element>
      </div>
    )
  }
}

export default StickyBar
