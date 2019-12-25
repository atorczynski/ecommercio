const express = require('express');
const app = express();
const port = 3003;

app.listen(port, () => {
  console.log('App running on port: ' + port);
});
