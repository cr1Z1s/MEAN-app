var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  user_id: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);