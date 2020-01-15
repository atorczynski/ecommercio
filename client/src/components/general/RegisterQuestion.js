import React from 'react';
import Button from './Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 140px;
`;

export default function RegisterQuestion() {
  return (
    <RegisterWrapper>
      <h4>Dont have an account yet?</h4>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </RegisterWrapper>
  );
}
