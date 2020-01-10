import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  opacity: 95%;
  top: 0;
  left: 0;
  transform: translateY(${props => (props.open ? '0%' : '-100%')});
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
const Seperator = styled.hr`
  width: 273px;
  height: 0px;
  border: 1px solid #707070;
  opacity: 0.17;
`;

export default function Menu(props) {
  return (
    <StyledMenu open={props.open}>
      <Seperator />
      <Link to={'/home'} onClick={props.onClick}>
        <p>Home</p>
      </Link>
      <Link to={'/import'} onClick={props.onClick}>
        <p>Import</p>
      </Link>
      <Link to={'/products'} onClick={props.onClick}>
        <p>Products</p>
      </Link>
      <Link to={'/billing'} onClick={props.onClick}>
        <p>Billing</p>
      </Link>
      <Link to={'/settings'} onClick={props.onClick}>
        <p>Settings</p>
      </Link>
    </StyledMenu>
  );
}
