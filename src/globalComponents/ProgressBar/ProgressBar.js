import React from 'react';
import PropTypes from 'prop-types';
import  { Meter } from './Styled';

const ProgressBar = ({ value }) => (
  <Meter value={value} />
);

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
}

export default ProgressBar;