var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
      type: String,
      required: true,
      unique: true
  },
  name: String,
  password: {
      type: String,
      required: true
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);