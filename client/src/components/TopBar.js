import React from 'react';
import styled from '@emotion/styled';
import LogoSvg from '../components/Logo';
import PropTypes from 'prop-types';

const AppBar = styled.div`
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export default function TopBar() {
  return (
    <AppBar>
      <LogoSvg />
    </AppBar>
  );
}

TopBar.propTypes = {
  merchantName: PropTypes.string
};
