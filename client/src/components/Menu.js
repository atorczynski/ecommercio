import styled from '@emotion/styled';
import React from 'react';

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
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

export default function Menu(props) {
  return (
    <StyledMenu open={props.open}>
      <a href="/home">
        <span role="img" aria-label="about us" />
        Home
      </a>
      <a href="/import">
        <span role="img" aria-label="price" />
        Import
      </a>
      <a href="/products">
        <span role="img" aria-label="contact" />
        Products
      </a>
      <a href="/settings">
        <span role="img" aria-label="contact" />
        Settings
      </a>
    </StyledMenu>
  );
}
