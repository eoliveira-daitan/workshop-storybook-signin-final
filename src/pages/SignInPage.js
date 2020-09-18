import React, { useState } from 'react';

import SignInForm, { steps } from '../molecules/SignInForm';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(steps.fillEmail);

  const user = {
    email,
    password,
  };

  const onChange = ({ target }) => {
    const { value, name } = target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = () => {
    if (step === steps.fillPassword) {
      console.log('SIGNED IN', user);
      return;
    }

    setStep(steps.fillPassword);
  };

  const onReset = () => {
    setEmail('');
    setPassword('');
    setStep(steps.fillEmail);
  };

  return (
    <SignInForm
      step={step}
      user={user}
      onChange={onChange}
      onSubmit={onSubmit}
      onReset={onReset}
    />
  );
};

export default SignInPage;
