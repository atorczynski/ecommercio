import React from 'react';
import styled from '@emotion/styled';
import MainMenuButton from './MenuButton';
import { Link } from 'react-router-dom';

const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingsButton = styled(MainMenuButton)`
  margin-top: 40px;
`;
export default function MainMenu(props) {
  return (
    <MenuWrapper>
      <Link to="/import">
        <MainMenuButton onClick={props.onClick}>Import</MainMenuButton>
      </Link>
      <Link to="/products">
        <MainMenuButton onClick={props.onClick}>Products</MainMenuButton>
      </Link>
      <Link to="/billing">
        <MainMenuButton onClick={props.onClick}>Billing</MainMenuButton>
      </Link>
      <Link to="/settings">
        <SettingsButton onClick={props.onClick}>Settings</SettingsButton>
      </Link>
    </MenuWrapper>
  );
}
