import React from 'react';
import { action } from '@storybook/addon-actions';
import MainMenu from '../components/MainMenu';
import MenuButton from '../components/MenuButton';
import MainOverview from '../components/MainOverview';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Menu',
  decorators: [withKnobs]
};

export function MainMenuButton() {
  return (
    <MenuButton onClick={action('clicked')} buttontext={text('Buttontext', 'Profile')}></MenuButton>
  );
}

export function Statistics() {
  return (
    <MainOverview
      productCount={number('Product Count', '123')}
      totalRefCount={number('Total Referrals', '213')}
      refsLastWeek={number('Refs Last 7 Days', 239)}
    ></MainOverview>
  );
}
