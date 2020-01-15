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
  background: ${props => props.theme.color.background};
  border: 1px solid ${props => props.theme.color.primary};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Icon = styled.img`
  height: 30px;
  margin: 30px;
`;

const NavButton = styled.button`
  background: none;
  color: ${props => props.theme.color.primary};
  border: none;
  padding: 0;
  outline: inherit;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
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
