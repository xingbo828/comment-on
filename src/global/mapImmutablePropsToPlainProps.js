import React from 'react';
import { Iterable } from 'immutable';

const mapImmutablePropsToPlainProps = (WrappedComponent) => {
  const MapImmutableToPlain = (wrappedComponentProps) => {
    const propsJS = Object.keys(wrappedComponentProps).reduce((previous, current) => {
      /* eslint-disable no-param-reassign */
      previous[current] = Iterable.isIterable(wrappedComponentProps[current]) 
              ? wrappedComponentProps[current].toJS()
              : wrappedComponentProps[current];
      return previous;
      /* eslint-enable no-param-reassign */
    }, {});
    return <WrappedComponent {...propsJS} />;
  };
  return MapImmutableToPlain;
};

export default mapImmutablePropsToPlainProps;