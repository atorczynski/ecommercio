const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('User', userSchema, 'users');
