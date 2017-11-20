import React from 'react';
import { string } from 'prop-types';
const Icon = ({ className='', icon, tag, size, spin, ...rest }) => {
  let innerClassName = `${className} fa fa-${icon}`;
  if(size){innerClassName = `${innerClassName} fa-${size}`};
  if(spin){innerClassName = `${innerClassName} fa-spin`}
  return React.createElement(tag, {
    ...rest,
    'aria-hidden': true,
    className: innerClassName
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
