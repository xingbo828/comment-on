import React, { Component, Children } from 'react';
import { number, oneOf } from 'prop-types';

import { StepsContainer } from './Styled';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.construct = this.construct.bind(this);
  }


  construct() {
    const currentIndex = this.props.current;
    const mode = this.props.mode;
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
        mode,
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
  current: 1,
  mode: 'guided'
}

Steps.propTypes = {
  current: number,
  /**
   * Free: steps(except current) are all clickable.
   * Guided: only steps < current are clickable
   */
  mode: oneOf(['free', 'guided'])
};

export default Steps;
