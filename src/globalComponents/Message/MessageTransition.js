import React from 'react';
import Transition from 'react-transition-group/Transition';

const MessageTransition = ({ timeout=150, in: inProp, children , unmountOnExit}) => {
  const defaultStyle = {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(-20px)`
  }

  const transitionStyles = {
    entered:  {
      opacity: 1,
      transform: `translateY(0)`
    }
  };

  return (<Transition in={inProp} timeout={timeout} unmountOnExit>
    {(state) => {
      return (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children(state)}
      </div>
      );
    }}
  </Transition>);
};

export default MessageTransition;
