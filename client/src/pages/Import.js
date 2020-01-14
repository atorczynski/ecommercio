import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImportBox from '../components/ImportBox';
import axios from 'axios';

export default function Import() {
  const [value, setValue] = React.useState('');

  function sendReq(baseURLValue) {
    axios.post('/api/products', { params: { baseURL: baseURLValue } });
  }
  function notify() {
    toast.success('Import Started!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  return (
    <>
      <ImportBox
        onChange={e => setValue(e.target.value)}
        redirect={'/products'}
        onClick={() => {
          sendReq(value);
          notify();
        }}
      />
    </>
  );
}
