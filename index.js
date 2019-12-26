const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3003;

const apiRoutes = require('./routes/api');

mongoose.connect('mongodb://127.0.0.1:27017/', { useUnifiedTopology: true });

app.listen(port, () => {
  console.log('App running on port: ' + port);
});

app.use('/api', apiRoutes);
