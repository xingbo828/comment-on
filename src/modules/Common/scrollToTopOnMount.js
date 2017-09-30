import React, { Component } from 'react';

const scrollToTopOnMount = (WrappedComponent) => {
  class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return ScrollToTopOnMount;
}

export default scrollToTopOnMount;
