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
    const response = await axios.get('http://localhost:3000/api/merchantproducts/');
    setProducts(response.data);
  }
  function deleteProduct(id) {
    try {
      axios.delete('http://localhost:3000/api/merchantproducts/' + id);
    } catch (error) {
      console.error(error);
    }
  }
  function updateProduct(url, id) {
    try {
      axios.put('http://localhost:3000/api/merchantproducts/', { params: { url: url, id: id } });
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(value) {
    setTimeout(async () => {
      const response = await axios.get('http://localhost:3000/api/search/' + value);
      setProducts(response.data);
    }, 5000);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchBar
          placeholder={'Search Products'}
          onChange={e => {
            handleChange(e.target.value);
          }}
        />
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
          onClickRefresh={() => updateProduct(product.url, product._id)}
        />
      ))}
    </Wrapper>
  );
}
