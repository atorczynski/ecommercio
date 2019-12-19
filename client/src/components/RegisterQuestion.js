import React from 'react';
import Button from '../components/Button';
import styled from '@emotion/styled';

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 140px;
`;

const Question = styled.h4`
  margin: 0;
`;

export default function RegisterQuestion() {
  return (
    <RegisterWrapper>
      <Question>Dont have an account yet?</Question>
      <Button>Register</Button>
    </RegisterWrapper>
  );
}
