import React from 'react';
import Button from '../components/Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </RegisterWrapper>
  );
}
