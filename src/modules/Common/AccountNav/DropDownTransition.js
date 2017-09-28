import React from 'react';
import Transition from 'react-transition-group/Transition';

const DropDownTransition = ({
  timeout=150,
  in: inProp,
  children
}) => {
  const defaultStyle = {
    transition: `transform ${timeout}ms ease-out`,
    transformOrigin: 'top',
    transform: `scaleY(0)`,
    position: 'absolute',
    width: '300px',
    right: '-1px',
    background: 'white'
  }

  const transitionStyles = {
    entered:  {
      transform: `scaleY(1)`
    },
    exiting: {
      transform: `scaleY(0)`
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
