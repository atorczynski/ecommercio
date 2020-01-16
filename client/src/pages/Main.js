import React from 'react';
import axios from 'axios';
import OverView from '../components/MainOverview';

function sumByKey(items, key) {
  const sum = items.reduce((prevSum, item) => prevSum + item[key], 0);
  return sum;
}

export default function Main() {
  const [products, setProducts] = React.useState([]);
  async function getData() {
    const response = await axios.get(`/api/products`);
    setProducts(response.data);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <OverView count={products.length} referralsCount={sumByKey(products, 'referrals')} />
    </div>
  );
}
