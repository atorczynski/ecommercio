import React from 'react';
import styled from '@emotion/styled';

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${props => (props.open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-of-type(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default function BurgerButton(props) {
  return (
    <StyledBurger onClick={props.onClick} open={props.open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
