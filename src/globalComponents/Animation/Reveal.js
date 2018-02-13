import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = timeout => ({
  transition: `height ${timeout}ms`,
  height: 0,
  overflow: 'hidden',
});

const transitionStyles = height => {
  const styles = {
    height: `${height}px`
  }

  const enteredStyle = {
    height: 'auto'
  }

  return {
    entering: styles,
    entered: enteredStyle,
    exiting: styles
  }
};

const Reveal = ({ height, children, exit, ...rest }) => (
  <Transition exit={exit} {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles(height)[status],
        }}
      >
        {children()}
      </div>
    )}
  </Transition>
);
Reveal.propTypes = {
  timeout: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
}

Reveal.defaultProps = {
  exit: true
}

export default Reveal;
