import React from 'react';
import Transition, {
  ENTERING,
  ENTERED
} from 'react-transition-group/Transition';

const FadeInTransition = ({ timeout=300, in: inProp, children}) => {
  const defaultStyle = {
    transition: `all ${timeout}ms ease-out`,
  }

  const transitionStyles = {
    [ENTERING]: {
      opacity: 0,
      transform: `scale(0.98)`
    },
    [ENTERED]:  {
      opacity: 1,
      transform: `none`
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


export default FadeInTransition;
