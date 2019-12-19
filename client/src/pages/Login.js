import React from 'react';
import LogoSvg from '../components/Logo';
import LoginInput from '../components/LoginInput';
import RegisterQuestion from '../components/RegisterQuestion';

function LoginPage() {
  return (
    <>
      <LogoSvg />
      <LoginInput passPlaceholder={'Password'} placeholder={'E-Mail'} />
      <RegisterQuestion />
    </>
  );
}

export default LoginPage;
