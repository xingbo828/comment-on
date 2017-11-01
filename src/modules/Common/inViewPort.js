import React, { Component, Children } from 'react';

const isInViewPort = options => WrappedComponent => {
  class InViewPort extends Component {
    constructor(props) {
      super(props);
      this.observer = null;
      this.node = null;
      this.state = {
        inViewPort: false
      };
    }

    componentDidMount() {
      this.initObserver();
      this.startObserver(this.node, this.observer);
    }

    componentWillUnmount() {
      this.stopObserver(this.node, this.observer);
    }

    initObserver = () => {
      if (!this.observer) {
        this.observer = new IntersectionObserver(
          this.handleIntersection,
          options
        );
      }
    };

    handleIntersection = entries => {
      const entry = entries[0] || {};
      const { intersectionRatio } = entry;
      if (intersectionRatio > 0) {
        this.setState({
          inViewPort: true
        });
      }
    };

    startObserver = (node, observer) => {
      observer.observe(node);
    };

    stopObserver = (node, observer) => {
      observer.unobserve(node);
      observer.disconnect();
    };

    render() {
      return (
        <div
          ref={node => {
            this.node = node;
          }}
        >
          <WrappedComponent
            {...this.props}
            inViewPort={this.state.inViewPort}
          />
        </div>
      );
    }
  }
  return InViewPort;
};

export default isInViewPort;
