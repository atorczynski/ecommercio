import React from 'react';
import styled from '@emotion/styled';
import Button from './general/Button';

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  min-width: 80%;
  justify-content: center;
  align-items: center;
`;
const InputBar = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

export default function SignUp(props) {
  return (
    <RegisterWrapper>
      <RegisterForm action="POST">
        <InputBar type="text" name={props.merchantName} placeholder="Username" />
        <InputBar type="email" name={props.merchantName} placeholder="E-Mail" />
        <InputBar type="password" name={props.merchantPassword} placeholder="Password" />
        <Button>{'Submit'}</Button>
      </RegisterForm>
      <h4>Your Account has to be activated by ecommercio after registering.</h4>
    </RegisterWrapper>
  );
}
