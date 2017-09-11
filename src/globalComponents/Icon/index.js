import React from 'react';
import { string } from 'prop-types';
const Icon = ({ icon, tag, size, spin, ...rest }) => {
  let className = `fa fa-${icon}`;
  if(size){className = `${className} fa-${size}`};
  if(spin){className = `${className} fa-spin`}
  return React.createElement(tag, {
    ...rest,
    'aria-hidden': true,
    className
  });
};

Icon.defaultProps = {
  tag: 'i'
}

Icon.propTypes = {
  icon: string.isRequired,
  size: string,
  tag: string
};

export default Icon;
