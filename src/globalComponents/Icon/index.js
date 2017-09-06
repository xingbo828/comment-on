import React from 'react';

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

export default Icon;
