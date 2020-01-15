import React from 'react';
import { errorNotification, importNotification } from '../lib/notifications';
import 'react-toastify/dist/ReactToastify.css';
import ImportBox from '../components/ImportBox';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Import() {
  const [value, setValue] = React.useState('');
  const history = useHistory();

  function sendURLRequest(baseURLValue) {
    axios.post('/api/products', { params: { baseURL: baseURLValue } });
  }

  function handleImportClick() {
    if (value === '' || !checkIfIsURL(value)) {
      errorNotification('No URL Provided');
      console.log('hi');
    } else {
      sendURLRequest(value);
      importNotification('Import Started');
      history.push('/products');
    }
  }

  function checkIfIsURL(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <>
      <ImportBox onChange={e => setValue(e.target.value)} onClick={handleImportClick} />
    </>
  );
}
