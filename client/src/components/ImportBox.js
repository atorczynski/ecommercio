import React from 'react';
import styled from '@emotion/styled';
import ImportWelcome from './ImportWelcome';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const InputWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
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
  border: none;
  outline: none;
  margin: 0;
  border-bottom: 1px solid rgba(211, 211, 211, 1);
  width: 250px;
  background: #efefef;
`;

export default function InputBar(props) {
  return (
    <Wrapper>
      <ImportWelcome />
      <InputWrapper>
        <Arrow />
        <Input
          type="text"
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
        />
      </InputWrapper>
        <Button onClick={props.onClick}>Import</Button>
    </Wrapper>
  );
}
