import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import BottomNav from '../components/BottomNav';

export default {
  title: 'Navigation',
  decorators: [withKnobs]
};

export function Navigation() {
  return <BottomNav onClick={action('clicked')}></BottomNav>;
}
