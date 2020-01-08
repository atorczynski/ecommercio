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
  const [products, setProducts] = React.useState(null);
  const [search, setSearch] = React.useState('');

  function deleteProduct(id) {
    try {
      axios.delete('/api/merchantproducts/' + id);
    } catch (error) {
      console.error(error);
    }
  }
  function updateProduct(url, id) {
    try {
      axios.put('/api/merchantproducts/', { params: { url: url, id: id } });
    } catch (error) {
      console.error(error);
    }
  }

  async function getData() {
    const response = await axios.get(`/api/merchantproducts?q=${search}`);
    setProducts(response.data);
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (products) {
      const timeoutId = setTimeout(getData, 800);
      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [search]);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchBar
          placeholder={'Search Products'}
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </InputWrapper>
      {products &&
        products.map(product => (
          <ProductElement
            key={product._id}
            {...product}
            onClickDelete={() => deleteProduct(product._id)}
            onClickRefresh={() => updateProduct(product.url, product._id)}
          />
        ))}
    </Wrapper>
  );
}
