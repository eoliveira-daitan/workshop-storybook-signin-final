import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({
  label,
  onClick,
}) => (
  <button
    className='Button'
    onClick={onClick}>
    {label}
  </button>
);

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: '',
  onClick: null,
};
