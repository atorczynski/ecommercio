import React from 'react';
import ProductDetail from '../components/ProductDetail';

export default function ProductDetails({ match }) {
  const [product, setProduct] = React.useState({});

  async function getDetails() {
    try {
      const response = await fetch('http://localhost:3003/api/merchantproducts/' + match.params.id);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getDetails();
  }, []);

  console.log(product);

  return (
    <>
      <ProductDetail
        imgSrc={product.img}
        productTitle={product.title}
        productPrice={product.price}
        productDescription={product.description}
        shopURL={product.url}
      />
    </>
  );
}
