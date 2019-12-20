import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputBar from '../components/Input';

export default {
  title: 'Import',
  decorators: [withKnobs]
};

export function InputField() {
  return (
    <InputBar onChange={action('change')} placeholder={'http(s)://yourshop.com'}>
      {text('Input', 'Value')}
    </InputBar>
  );
}
