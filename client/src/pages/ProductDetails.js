import React from 'react';
import ProductDetail from '../components/ProductDetail';
import axios from 'axios';

export default function ProductDetails({ match }) {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get('/api/merchantproducts/' + match.params.id);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, []);

  console.log(product);

  return <ProductDetail {...product} />;
}
