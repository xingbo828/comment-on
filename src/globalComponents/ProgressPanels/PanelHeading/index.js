import React from 'react';
import { node } from 'prop-types';
import {
  PanelHeadingContainer
} from './Styled';

const PanelHeading = ({children, ...rest}) => {
  return (
    <PanelHeadingContainer>
      {children}
    </PanelHeadingContainer>
  );
};

PanelHeading.propTypes = {
  children: node.isRequired
};

export default PanelHeading;
