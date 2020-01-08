import React from 'react';
import ImportBox from '../components/ImportBox';
import axios from 'axios';

export default function Import() {
  const [value, setValue] = React.useState('');


  function sendReq(baseURLValue) {
    axios.post('/api/merchantproducts', { params: { baseURL: baseURLValue } });
  }
  return (
    <>
      <ImportBox onChange={e => setValue(e.target.value)} onClick={() => sendReq(value)} />
    </>
  );
}
