import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = timeout => ({
  transition: `max-height ${timeout}ms`,
  overflow: 'hidden',
  maxHeight: 0,
  opacity: 0
});

const transitionStyles = () => {
  const styles = {
    opacity: 1
  }

  const enteredStyle = {
    height: 'auto',
    maxHeight: `500px`,
    opacity: 1
  }

  return {
    entering: styles,
    entered: enteredStyle,
    exiting: styles
  }
};

const Reveal = ({ children, exit, ...rest }) => (
  <Transition exit={exit} {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles()[status],
        }}
      >
        {children()}
      </div>
    )}
  </Transition>
);
Reveal.propTypes = {
  timeout: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired
}

Reveal.defaultProps = {
  exit: true
}

export default Reveal;
