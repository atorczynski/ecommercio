const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const apiRoutes = require('./routes/api');
const port = 3003;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api', apiRoutes);

// const corsMiddleware = (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE, PUT');
//   next();
// };

// app.use(corsMiddleware);

mongoose
  .connect('mongodb://127.0.0.1:27017/', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connected to DB');

    app.listen(port, () => {
      console.log('App running on port: ' + port);
    });
  });
