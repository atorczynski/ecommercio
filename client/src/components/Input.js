import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  margin-right: 15px;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const Input = styled.input`
  margin-bottom: 50px;
  border: none;
  margin: 0;
  border-bottom: 1px solid rgba(211, 211, 211, 1);
  width: 200px;
  background: #efefef;
`;

export default function InputBar(props) {
  return (
    <InputWrapper>
      <Arrow></Arrow>
      <Input
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
}
