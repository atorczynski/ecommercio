import React from 'react';
import LoginInput from '../components/LoginInput';
import RegisterQuestion from '../components/RegisterQuestion';

function LoginPage() {
  function handleLogin() {
    console.log('Fired');
  }
  return (
    <>
      <LoginInput onClick={handleLogin} passPlaceholder={'Password'} placeholder={'E-Mail'} />
      <RegisterQuestion />
    </>
  );
}

export default LoginPage;
