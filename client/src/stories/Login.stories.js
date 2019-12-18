import React from 'react';
import Login from '../components/Login';
import Button from '../components/Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Login',
  decorators: [withKnobs]
};

export function LoginInput() {
  return <Login placeholder={'E-Mail'} passPlaceholder={'Password'}></Login>;
}
export function LoginButton() {
  return <Button text={text('Login', 'Text')}></Button>;
}
