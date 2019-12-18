import React from 'react';
import TopBar from '../components/TopBar';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'TopBar',
  decorators: [withKnobs]
};

export function AppBar() {
  return <TopBar merchantName={text('Label', 'Merchant')}></TopBar>;
}
