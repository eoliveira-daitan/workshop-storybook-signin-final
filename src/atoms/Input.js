import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
  value,
  label,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  const isPasswordType = type === 'password';
  const isPasswordVisible = isPasswordType && !isHidden;

  const inputType = isPasswordVisible
    ? 'text'
    : type;

  return (
    <label
      className={`Input ${isPasswordType ? 'Password' : ''}`}
    >
      {label && <span>{label}</span>}
      <input
        type={inputType}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {
        isPasswordType && (
          <button onClick={() => setIsHidden(!isHidden)}>
            👁
          </button>
        )
      }
    </label>
  );
}

export default Input;

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['', 'text', 'email', 'password']),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  label: '',
  type: 'text',
  name: '',
  placeholder: '',
  onChange: null,
};
