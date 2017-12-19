import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

// Based off of the Fade example at https://reactcommunity.org/react-transition-group/

const defaultStyle = timeout => ({
  transition: `opacity ${timeout}ms ease-in-out`,
  opacity: 0,
});

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ children, component, ...rest }) => {
  const C = component;
  return (
    <Transition {...rest}>
      {status => (
        <C
          style={{
            ...defaultStyle(rest.timeout),
            ...transitionStyles[status],
          }}
        >
          {children(status)}
        </C>
      )}
    </Transition>
  );
}
Fade.propTypes = {
  timeout: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired
};

export default Fade;
