import React from 'react';
import Transition, {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED
} from 'react-transition-group/Transition';

const StepsRouteTransition = ({ timeout=250, in: inProp, children}) => {
  const defaultStyle = {
    transition: `all ${timeout}ms ease-out`,
    opacity: 0,
    padding: '1rem 0'
  }

  const transitionStyles = {
    [ENTERING]: {
      opacity: 0,
      transform: `translateX(30px)`
    },
    [ENTERED]:  {
      opacity: 1,
      transform: `translateX(0)`
    }
  };

  return (<Transition in={inProp} unmountOnExit exit={false} timeout={timeout}>
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
