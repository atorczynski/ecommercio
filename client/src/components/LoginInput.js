import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Button from './Button';

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  align-items: center;
  align-content: center;
`;

const UserLoginName = styled.input`
  margin-bottom: 50px;
  border: none;
  border-bottom: 1px solid rgba(211, 211, 211, 1);
  width: 200px;
  background: #efefef;
`;
const UserLoginPassword = styled.input`
  border: none;
  border-bottom: 1px solid rgba(211, 211, 211, 1);
  width: 200px;
  background: #efefef;
`;

export default function Login(props) {
  return (
    <LoginBox>
      <UserLoginName
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
      />
      <UserLoginPassword
        type="password"
        value={props.password}
        placeholder={props.passPlaceholder}
      />
      <Button onClick={props.onClick}>Login</Button>
    </LoginBox>
  );
}

Login.propTypes = {
  value: PropTypes.string
};