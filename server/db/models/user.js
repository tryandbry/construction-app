const mongoose = require('mongoose');

const User = mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model('User',User);
