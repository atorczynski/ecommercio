import React from 'react';
import Logosvg from '../assets/logo.svg';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LogoDisplay = styled.img`
  height: 125px;
  margin-right: -40px;
`;

export default function Logo() {
  return (
    <Link to={'/home'}>
      <LogoDisplay src={Logosvg} alt="" />
    </Link>
  );
}
