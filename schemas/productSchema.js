const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  img: {
    type: String,
    default:
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
  },
  price: {
    type: String,
    required: true
  },
  referrals: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    default: 'No description provided'
  },
  crawledAt: {
    type: Date
  }
});

module.exports = mongoose.model('Product', ProductSchema, 'products');
