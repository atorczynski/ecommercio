import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  z-index: 5;
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

export default function Menu(props) {
  return (
    <StyledMenu open={props.open}>
      <Link to={'/home'} onClick={props.onClick}>
        <p>Home</p>
      </Link>
      <Link to={'/import'} onClick={props.onClick}>
        <p>Import</p>
      </Link>
      <Link to={'/products'} onClick={props.onClick}>
        <p>Products</p>
      </Link>
    </StyledMenu>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func
};
