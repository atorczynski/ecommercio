import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductElement from '../components/ProductElement';
import styled from '@emotion/styled';
import BottomNav from '../components/BottomNav';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export default function Products() {
  return (

    <Wrapper>
      <InputWrapper>
        <SearchBar placeholder={'Search Products'} />
      </InputWrapper>
      <ProductElement productName={productName} />
      <BottomNav></BottomNav>
    </Wrapper>
  );
}
