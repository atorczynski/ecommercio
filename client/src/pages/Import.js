import React from 'react';
import ImportBox from '../components/ImportBox';
import axios from 'axios';

export default function Import() {
  const [value, setValue] = React.useState('');

  function sendReq(baseURL) {
    axios.post('http://localhost:3003/api/merchantbase', { params: { baseURL: baseURL } });
  }
  return (
    <>
      <ImportBox onChange={e => setValue(e.target.value)} onClick={() => sendReq(value)} />
    </>
  );
}
