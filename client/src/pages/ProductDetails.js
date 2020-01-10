import React from 'react';
import styled from '@emotion/styled';
import ProductDetail from '../components/ProductDetail';
import axios from 'axios';
import Button from '../components/Button';

function incrementRef(id) {
  axios.put('/api/increment/products/' + id);
}

export default function ProductDetails({ match }) {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get('/api/products/' + match.params.id);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, []);

  console.log(product);

  return (
    <>
      <ProductDetail {...product} />
      <a href={product.url}>
        <Button onClick={() => incrementRef(product._id)}>Shop</Button>
      </a>
    </>
  );
}
