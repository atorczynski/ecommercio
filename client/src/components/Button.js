import React from 'react';
import styled from '@emotion/styled';

const GlobalButton = styled.button`
  margin-top: 50px;
  width: 108px;
  height: 25px;
  border-radius: 12.5px;
  background: #ed462e;
  border: 1px solid #707070;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: normal;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.05em;
  text-align: center;
  color: #efefef;
`;

export default function Button(props) {
  return <GlobalButton onClick={props.onClick}>{props.text}</GlobalButton>;
}
