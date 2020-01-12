import React from 'react';
import OverView from '../components/MainOverview';
import axios from 'axios';

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

  // console.log(sumByKey(products, 'referrals'));
  console.log(products[1]);

  return (
    <div>
      <OverView count={products.length} referralsCount={sumByKey(products, 'referrals')} />
    </div>
  );
}
