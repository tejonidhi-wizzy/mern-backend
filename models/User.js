const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  address: String,
  age: Number,
  gender: String,
  bio: String,
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
