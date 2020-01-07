const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const port = 3003;

app.use(morgan('combined'));
const apiRoutes = require('./routes/api');
app.use(express.json());

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE, PUT');
  next();
};

app.use(corsMiddleware);

mongoose.connect(
  'mongodb://127.0.0.1:27017/',
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Conncted to DB');
    }
  }
);

app.listen(port, () => {
  console.log('App running on port: ' + port);
});

app.use('/api', apiRoutes);
