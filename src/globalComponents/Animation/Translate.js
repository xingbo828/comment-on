import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = (timeout, origin, direction) => ({
  transition: `transform ${timeout}ms`,
  transform: `translate${direction.toUpperCase()}(${origin})`
});

const transitionStyles = (direction, dest) => {
  const styles = {
    transform: `translate${direction.toUpperCase()}(${dest})`,
  }

  return {
    entering: styles,
    entered: styles,
  }
};

const Translate = ({ direction, dest, origin, children, ...rest }) => (
  <Transition {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout, origin, direction),
          ...transitionStyles(direction, dest)[status],
        }}
      >
        {children(status)}
      </div>
    )}
  </Transition>
);
Translate.propTypes = {
  timeout: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['x', 'y']).isRequired,
  origin: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

export default Translate;
