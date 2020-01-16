import React from 'react';
import PropTypes from 'prop-types';
import ResizeSpin from './ResizeSpin';

export const ResizeSpinLoader = props => <ResizeSpin {...props} />;

ResizeSpinLoader.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number
};

ResizeSpinLoader.defaultProps = {
  background: '#EFEFEF',
  color: '#ED462E',
  duration: 2,
  size: 11
};
