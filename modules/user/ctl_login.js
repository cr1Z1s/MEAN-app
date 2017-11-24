var User = require('./schema_user.js')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

module.exports.login = function (req, res) {
  var userinfo = {
    username: req.body.username,
    password: req.body.password
  }

  User.findOne({ 'username': req.body.username }, function (err, user) {
    var response = {
      status: 401,
      message: 'failed'
    }

    if (err) {
      response.status = 401;
      response.message = 'failed'
    }
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      var token = jwt.sign(
        { username: user.username, name: user.name },
        'secret',
        { expiresIn: 60 * 60 });
      response.status = 201;
      response.message = token;
    } else {
      response.status = 401;
      response.message = 'failed'
    }
    res.status(response.status).json({ 'message': response.message })
  })
}