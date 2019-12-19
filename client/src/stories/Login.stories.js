import React from 'react';
import Login from '../components/LoginInput';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Login',
  decorators: [withKnobs]
};

export function LoginInput() {
  return <Login placeholder={'E-Mail'} passPlaceholder={'Password'}></Login>;
}
export function LoginButton() {
  return <Button onClick={action('clicked')}>{text('Login', 'Text')}</Button>;
}
