import React from 'react';
import PropTypes from 'prop-types';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

import './SignInForm.css';

export const steps = {
  fillEmail: 'FILL_EMAIL',
  fillPassword: 'FILL_PASSWORD',
};

const getRenderDetails = (step, user) => {
  switch(step) {
    case steps.fillPassword:
      return ({
        label: 'Password',
        type: 'password',
        name: 'password',
        value: user.password,
        buttonLabel: 'Sign In',
      });
    case steps.fillEmail:
    default:
      return ({
        label: 'Email',
        type: 'email',
        name: 'email',
        value: user.email,
        buttonLabel: 'Continue',
      });
  }
};

const SignInForm = ({
  step,
  user = {},
  onChange,
  onSubmit,
  onReset,
}) => {
  const {
    label,
    type,
    name,
    value,
    buttonLabel,
  } = getRenderDetails(step, user);

  return (
    <section className='SignInForm'>
      <h2>Sign-In</h2>
      { step === steps.fillPassword
        && (<p>
          {user.email} <a onClick={onReset}>Change</a>
        </p>)}
      <Input
        label={label}
        type={type}
        name={name}
        placeholder={`Enter your ${name}`}
        value={value}
        onChange={onChange}
      />
      <Button
        label={buttonLabel}
        onClick={onSubmit}
      />
    </section>
  );
};

export default SignInForm;

SignInForm.propTypes = {
  step: PropTypes.oneOf(Object.values(steps)),
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

SignInForm.defaultProps = {
  step: steps.fillEmail,
  user: {},
  onChange: null,
  onSubmit: null,
  onReset: null,
};
