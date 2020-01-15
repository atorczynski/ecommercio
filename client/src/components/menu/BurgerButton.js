import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

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
      ${props => (props.open ? open : '')}
    }

    :nth-of-type(2) {
      ${props => (props.open ? open : '')};
    }

    :nth-of-type(3) {
      ${props => (props.open ? open : '')};
    }
  }
`;

const open = css`
  :first-of-type {
    transform: rotate(45deg);
  }

  :nth-of-type(2) {
    opacity: 0;
    transform: translateX(20px);
  }
  :nth-of-type(3) {
    transform: rotate(-45deg);
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

BurgerButton.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func
};
