import React, { Component } from 'react';

const asyncLoad = (loader) => {
  class AsyncLoad extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    componentWillMount() {
      const load = loader();
      load.then((C)=> {
        this.setState({
          component: C
        })
      })
      .catch(console.error);
    }

    render() {
      console.log();
      return this.state.component ? <this.state.component.default {...this.props}/> : null;
    }
  }
  return AsyncLoad;
};

export default asyncLoad;
