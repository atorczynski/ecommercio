import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuButton from '../components/general/MenuButton';
import MainOverview from '../components/MainOverview';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Menu',
  decorators: [withKnobs]
};

export function Statistics() {
  return (
    <MainOverview
      count={number('Product Count', '123')}
      referralsCount={number('Total Referrals', '213')}
    ></MainOverview>
  );
}
