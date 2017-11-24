var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  project_id: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);