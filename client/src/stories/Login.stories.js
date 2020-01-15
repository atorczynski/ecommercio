import React from 'react';
import Button from '../components/Button';
import MenuButton from '../components/MenuButton';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Buttons',
  decorators: [withKnobs]
};

export function ActionButton() {
  return <Button onClick={action('clicked')}>{text('Inner Text', 'Text')}</Button>;
}
export function Menu_Button() {
  return <MenuButton onClick={action('clicked')}>{text('Inner Text', 'Text')}</MenuButton>;
}
