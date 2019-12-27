const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3003;

const apiRoutes = require('./routes/api');
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
