import React from 'react';
import MainOverview from '../components/MainOverview';
import { withKnobs, number } from '@storybook/addon-knobs';

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
