import React from 'react';
import ProductDetail from '../components/ProductDetail';
import axios from 'axios';
import Button from '../components/Button';

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
