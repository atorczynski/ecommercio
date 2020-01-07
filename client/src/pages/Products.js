import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductElement from '../components/ProductElement';
import styled from '@emotion/styled';
import axios from 'axios';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export default function Products() {
  const [products, setProducts] = React.useState([]);

  async function getData() {
    const response = await fetch('http://localhost:3003/api/merchantproducts');
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }
  function deleteProduct(id) {
    try {
      axios.delete('http://localhost:3003/api/merchantproducts/' + id, { crossdomain: true });
    } catch (error) {
      console.error(error);
    }
  }
  function updateProduct(url) {
    try {
      axios.put('http://localhost:3003/api/merchantproducts/', { params: { url: url } });
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchBar placeholder={'Search Products'} />
      </InputWrapper>
      {products.map(product => (
        <ProductElement
          productIDLink={product._id}
          key={product._id}
          productRefCount={product.referrals}
          productName={product.title}
          productPrice={product.price}
          imgSrc={product.img}
          onClickDelete={() => deleteProduct(product._id)}
          onClickRefresh={() => updateProduct(product.url)}
        />
      ))}
    </Wrapper>
  );
}
