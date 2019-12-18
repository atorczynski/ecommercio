import React from 'react';
import styled from '@emotion/styled';

const MenuButton = styled.button`
  width: 186px;
  height: 30px;
  border-radius: 15px;
  background: #f4f4f4;
  border: 1px solid #707070;
  outline: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export default function MainMenuButton(props) {
  return <MenuButton onClick={props.onClick}>{props.buttontext}</MenuButton>;
}
