import React from 'react';
import { string } from 'prop-types';
const Icon = ({ icon, tag, size, ...rest }) => {
  let className = `fa fa-${icon}`;
  if(size){className = `${className} fa-${size}`};
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
