import React from 'react';
import Transition from 'react-transition-group/Transition';

const StepsRouteTransition = ({ timeout=300, in: inProp, children, unmountOnExit}) => {
  const defaultStyle = {
    position: 'absolute',
    width: '100%',
    transition: `all ${timeout}ms ease-out`,
    opacity: 0,
    transform: `translateX(50px)`
  }

  const transitionStyles = {
    entered:  {
      opacity: 1,
      transform: `translateX(0)`
    },
    exiting: {
      opacity: 0,
      transform: `translateX(-50px)`
    }
  };

  return (<Transition in={inProp} timeout={timeout} unmountOnExit>
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


export default StepsRouteTransition;
