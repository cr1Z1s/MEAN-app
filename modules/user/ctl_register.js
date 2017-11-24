var User = require('./schema_user.js')
var bcrypt = require('bcryptjs');

module.exports.register = function (req, res) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  var userinfo = {
    username: req.body.username,
    name: req.body.name || null,
    password: hash
  }

  User.create(userinfo, function (err, doc) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(doc)
  })
}

module.exports.checkUser = function (req, res) {
  User.findOne({ 'username': req.params.username }, function (err, user) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(user);
  })
}