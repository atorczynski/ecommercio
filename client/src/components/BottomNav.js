import React from 'react';
import styled from '@emotion/styled';
import home from '../assets/home.svg';
import leftarrow from '../assets/left-arrow.svg';

const BottomNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #efefef;
  border: 1px solid #707070;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Icon = styled.img`
  height: 55px;
  margin: 25px;
`;

const NavButton = styled.button`
  background: none;
  color: #707070;
  border: none;
  padding: 0;
  outline: inherit;
`;

export default function BottomNav(props) {
  return (
    <BottomNavigation>
      <NavButton onClick={props.onClick}>
        <Icon src={home}></Icon>
      </NavButton>
      <NavButton onClick={props.onClick}>
        <Icon src={leftarrow}></Icon>
      </NavButton>
    </BottomNavigation>
  );
}
