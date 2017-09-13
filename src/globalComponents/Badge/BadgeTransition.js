import React from 'react';
import Transition from 'react-transition-group/Transition';

const BadgeTransition = ({
  type,
  timeout=200,
  in: inProp,
  children ,
  unmountOnExit
}) => {
  const getWidth = (type) => type === 'dot' ? '8px' : 'auto';
  const defaultStyle = {
    transition: `transform ${timeout}ms cubic-bezier(0.720, -0.600, 0.370, 1.650)`,
    transform: `scale(0, 0)`,
    height: '8px',
    width: getWidth(type),
    position: 'absolute'
  }

  const transitionStyles = {
    entered:  {
      transform: `scale(1, 1)`
    },
    exiting: {
      transform: `scale(0, 0)`
    }
  };

  return (<Transition in={inProp} timeout={timeout} unmountOnExit>
    {(state) => {
      return (
      <span className={state} style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children(state)}
      </span>
      );
    }}
  </Transition>);
};

export default BadgeTransition;
