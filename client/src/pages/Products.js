import React from 'react';
import SearchBar from '../components/general/SearchBar';
import { css } from '@emotion/core';
import { deleteNotification, refreshNotification } from '../lib/notifications';
import 'react-toastify/dist/ReactToastify.css';
import ProductElement from '../components/product/ProductElement';
import styled from '@emotion/styled';
import axios from 'axios';
import { ResizeSpinLoader } from '../components/loader/ResizeSpinLoader';

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
  const [loading, setLoading] = React.useState(true);

  function deleteProduct(id) {
    try {
      axios.delete('/api/products/' + id);
    } catch (error) {
      console.error(error);
    }
  }
  function updateProduct(url, id) {
    try {
      axios.put('/api/products/', { params: { url: url, id: id } });
    } catch (error) {
      console.error(error);
    }
  }

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(`/api/products?q=${search}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (products) {
      const timeoutId = setTimeout(getData, 1000);
      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [search]);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchBar
          autoFocus
          placeholder={'Search Products'}
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </InputWrapper>
      {loading && <ResizeSpinLoader />}
      {products &&
        products.map(product => (
          <ProductElement
            key={product._id}
            {...product}
            onClickDelete={() => {
              deleteProduct(product._id);
              setTimeout(() => {
                getData();
              }, 500);

              deleteNotification('Product Deleted');
            }}
            onClickRefresh={() => {
              updateProduct(product.url, product._id);
              getData();
              refreshNotification('Product Refreshed');
            }}
          />
        ))}
    </Wrapper>
  );
}
