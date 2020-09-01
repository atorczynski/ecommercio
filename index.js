require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

const app = express();
const apiRoutes = require('./routes/api');

const port = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(express.json());
app.use('/api', apiRoutes);

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to DB');

    app.listen(port, () => {
      console.log('App running on port: ' + port);
    });
  })
  .catch(error => {
    console.log(error);
  });
