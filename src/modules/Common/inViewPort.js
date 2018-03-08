import React, { Component } from 'react';

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

    shouldComponentUpdate(nextProps, nextState) {
      if(this.state.inViewPort === false && this.state.inViewPort !== nextState.inViewPort) {
        return true;
      }
      return false;
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
      const { inViewPort } = this.state;
      return (
        <div
          style={{minHeight: options.containerMinHeight}}
          ref={node => {
            this.node = node;
          }}
        >
          {inViewPort && <WrappedComponent
            {...this.props}
            inViewPort={this.state.inViewPort}
          />}
        </div>
      );
    }
  }
  return InViewPort;
};

export default isInViewPort;
