const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
  url: {
    type: String
  },
  img: {
    type: String
  },
  title: {
    type: String
  },
  price: {
    type: Number
  },
  productid: {
    type: String
  },
  crawledAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = product;
