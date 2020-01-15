import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ImportBox from '../components/ImportBox';

export default {
  title: 'Import',
  decorators: [withKnobs]
};

export function InputField() {
  return (
    <ImportBox
      onChange={action('change')}
      placeholder={'http(s)://yourshop.com'}
      value={text('Input', 'Value')}
      onClick={action('Submit / Import')}
    ></ImportBox>
  );
}
