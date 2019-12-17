import React from 'react';
import styled from '@emotion/styled';

const GlobalButton = styled.button`
  margin-top: 50px;
  width: 108px;
  height: 25px;
  border-radius: 12.5px;
  border: none;
  outline: none;
  background: ${props => props.theme.color.buttoncolor};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: normal;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.05em;
  text-align: center;
  color: #efefef;
`;

export default function Button(props) {
  return <GlobalButton onClick={props.onClick}>{props.text}</GlobalButton>;
}
