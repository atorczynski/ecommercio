const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const apiRoutes = require('./routes/api');
const port = 3003;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api', apiRoutes);

mongoose
  .connect('mongodb://127.0.0.1:27017/', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connected to DB');

    app.listen(port, () => {
      console.log('App running on port: ' + port);
    });
  });
