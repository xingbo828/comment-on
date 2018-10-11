import React from 'react'
import StickyNav from './StickyNav'
import StickyNavContext from './StickyNavContext'

class StickyNavContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      subscribers: []
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    let activeIndex = null;
    this.state.subscribers.forEach((element, idx) => {
      if (element.node.getBoundingClientRect().top < 0) {
        activeIndex = idx 
      }
    })

    if (activeIndex === null) {
      this.setState({ activeIndex: 0 })
      return
    }

    this.setState({ activeIndex })
  }

  subscribe(node) {
    this.setState((prevState) => {
      prevState.subscribers.push(node)
      return { subscribers: prevState.subscribers}
    })
  }

  render() {
    return (
      <div>
        <StickyNav items={this.state.subscribers} active={this.state.activeIndex} />
        <StickyNavContext.Provider value={{subscribe: this.subscribe.bind(this)}}>
          {this.props.children}
        </StickyNavContext.Provider>
      </div>
    )
  }
}

export default StickyNavContainer