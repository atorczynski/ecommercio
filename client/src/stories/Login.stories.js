import React from 'react';
import Login from '../components/Login';
import Button from '../components/Button';

export default {
  title: 'Login'
};

export function LoginInput() {
  return <Login placeholder={'E-Mail'} passPlaceholder={'Password'}></Login>;
}
export function LoginButton() {
  return <Button text={'Login'}></Button>;
}
