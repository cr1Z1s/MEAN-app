var User = require('./schema_user.js')

module.exports.remove = function (req, res) {
  var query = { 'username': req.username, }

  User.remove(query, function (err, success) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(success)
  })
}