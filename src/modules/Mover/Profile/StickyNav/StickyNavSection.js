import React from 'react'
import StickyNavContext from './StickyNavContext'

class StickyNavSection extends React.Component {

  componentDidMount() {
    this.props.subscribe({ node: this.node, name: this.props.name })
  }

  render() {
    return (
      <div ref={(node) => this.node = node}>
       {this.props.children}
      </div>
    )
  }
}

export default (props) => (
  <StickyNavContext.Consumer>
    {({ subscribe }) => <StickyNavSection {...props} subscribe={subscribe} />}
  </StickyNavContext.Consumer>
);