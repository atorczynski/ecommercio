import React from 'react';
import styled from '@emotion/styled';
import LogoSvg from '../components/Logo';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';
import Menu from './Menu';

const AppBar = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
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
      <LogoSvg />
    </AppBar>
  );
}

TopBar.propTypes = {
  merchantName: PropTypes.string
};
