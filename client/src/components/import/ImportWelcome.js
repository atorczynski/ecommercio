import React from 'react';
import styled from '@emotion/styled';

const Welcome = styled.p`
  width: 315px;
  margin-top: 100px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #707070;
`;

export default function ImportWelcome() {
  return (
    <div>
      <Welcome>Simply add your base URL to import all products to your ecommerio shop</Welcome>
    </div>
  );
}
