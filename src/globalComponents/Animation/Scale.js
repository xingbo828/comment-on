import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = (timeout, timingFunction) => ({
  transform: 'scale(0, 0)',
  transition: `transform ${timeout}ms ${timingFunction}`
});

const transitionStyles = (abscissa, ordinate) => {
  const styles = {
    transform: `scale(${abscissa}, ${ordinate || abscissa})`,
  }

  return {
    entering: styles,
    entered: styles,
  }
};

const Scale = ({ abscissa, ordinate, timingFunction, children, ...rest }) => {
  return <Transition {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout, timingFunction),
          ...transitionStyles(abscissa, ordinate)[status],
        }}
      >
        {children(status)}
      </div>
    )}
  </Transition>
};

Scale.propTypes = {
  timeout: PropTypes.number.isRequired,
  abscissa: PropTypes.number.isRequired,
  ordinate: PropTypes.number,
  children: PropTypes.func.isRequired,
  timingFunction: PropTypes.string
};

Scale.defaultProps = {
  timingFunction: ''
};

export default Scale;
