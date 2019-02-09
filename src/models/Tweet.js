const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tweet', Schema);
