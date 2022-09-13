import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => (
  <div className={`min-h-screen p-6 ${className}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
