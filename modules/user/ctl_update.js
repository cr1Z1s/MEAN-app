var User = require('./schema_user.js')
var bcrypt = require('bcryptjs')

module.exports.edit = function (req, res) {
  var salt = bcrypt.genSaltSync(10);  
  var hash = bcrypt.hashSync(req.body.password, salt);
  var userinfo = {
    name: req.body.name || null,
    password: hash
  }
  var query = { 'username': req.body.username }
  User.update(query, userinfo, function (err, doc) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(doc)
  })
}