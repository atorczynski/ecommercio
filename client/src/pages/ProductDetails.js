import React from 'react';
import axios from 'axios';
import ProductDetail from '../components/product/ProductDetail';
import Button from '../components/general/Button';

function incrementRef(id) {
  axios.put('/api/increment/' + id);
}

export default function ProductDetails({ match }) {
  const [product, setProduct] = React.useState({});
  const [isActive, setActive] = React.useState(false);

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

  return (
    <>
      <ProductDetail {...product} />
      <a href={product.url}>
        <Button
          onClick={() => (isActive ? true : incrementRef(product._id) ? isActive : setActive(true))}
        >
          Shop
        </Button>
      </a>
    </>
  );
}
