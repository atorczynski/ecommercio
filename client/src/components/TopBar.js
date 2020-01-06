import React from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/logo.svg';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const AppBar = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const LogoTopBar = styled.img`
  height: 135px;
  width: 300px;
  margin-right: -90px;
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
      <Menu open={openMenu} />
      <Link to={'/home'}>
        <LogoTopBar src={Logo} />
      </Link>
    </AppBar>
  );
}

TopBar.propTypes = {
  merchantName: PropTypes.string
};
