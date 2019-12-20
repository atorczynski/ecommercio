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

export default function Products() {
  const [imgSrc, setImgSrc] = React.useState('asdasd');
  const [productName, setProduct] = React.useState('jkkjhj');
  const [productPrice, setProductPrice] = React.useState('');
  const [pproductID, setProductID] = React.useState('');
  const [productRefCount, setProductRefCount] = React.useState('');
  return (
    <div>
      <InputWrapper>
        <SearchBar placeholder={'Search Products'} />
      </InputWrapper>
      <ProductElement productName={productName} />
      <BottomNav></BottomNav>
    </div>
  );
}
