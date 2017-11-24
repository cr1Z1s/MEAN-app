var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tracker', {
  useMongoClient: true
});

// Check if database is connected
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected")
  // we're connected!
});