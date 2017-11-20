import React, { Component, Children } from 'react';
import { number } from 'prop-types';

import { StepsContainer } from './Styled';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.construct = this.construct.bind(this);
  }


  construct() {
    const currentIndex = this.props.current;
    let children = [];
    Children.forEach(this.props.children, (child, index) => {
      if (!child) return;
      let status;
      if (currentIndex > index) {
        status = 'completed';
      } else if(currentIndex === index) {
        status = 'inProgress';
      } else {
        status = 'incomplete';
      }
      const props = {
        key: index,
        index,
        status,
        onStepClick: child.props.onStepClick,
        ...child.props
      };
      children.push(React.cloneElement(child, props));
    })
    return children;
  }

  render() {
    return (
      <StepsContainer>
        {this.construct()}
      </StepsContainer>
    );
  }
}

Steps.defaultProps = {
  current: 1
}

Steps.propTypes = {
  current: number
};

export default Steps;
