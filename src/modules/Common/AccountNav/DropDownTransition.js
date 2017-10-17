import React from 'react';
import Transition from 'react-transition-group/Transition';

const DropDownTransition = ({
  timeout=300,
  in: inProp,
  children
}) => {
  const defaultStyle = {
    top: '60px',
    transition: `${timeout}ms`,
    transformOrigin: 'top right',
    opacity: 0,
    position: 'absolute',
    width: '300px',
    right: '0',
    background: 'white'
  }

  const transitionStyles = {
    entering: {
      opacity: 1,
    },
    entered:  {
      opacity: 1
    },
    exiting: {
      // transform: `scaleY(0)`
    }
  };

  return (<Transition in={inProp} timeout={timeout}>
    {(state) => {
      return (
      <div className={state} style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children(state)}
      </div>
      );
    }}
  </Transition>);
};

export default DropDownTransition;
