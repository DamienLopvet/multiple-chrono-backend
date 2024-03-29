const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//check if a user that signup is already in the database
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);    