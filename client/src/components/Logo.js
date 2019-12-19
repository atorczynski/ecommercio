import React from 'react';
import Logosvg from '../assets/logo.svg';
import styled from '@emotion/styled';

const LogoDisplay = styled.img`
  height: 200px;
  width: 100%;
`;

export default function Logo() {
  return <LogoDisplay src={Logosvg} alt="" />;
}
