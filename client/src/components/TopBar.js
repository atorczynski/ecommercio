import React from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/logo.svg';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const AppBar = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100px;
  overflow: hidden;
`;

const LogoTopBar = styled.img`
  width: 200px;
`;

export default function TopBar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <AppBar>
      <BurgerButton
        open={openMenu}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      />
      <Menu open={openMenu} onClick={() => setOpenMenu()} />
      <LogoWrapper>
        <Link to={'/home'}>
          <LogoTopBar src={Logo} />
        </Link>
      </LogoWrapper>
    </AppBar>
  );
}
