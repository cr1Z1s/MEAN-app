var express = require('express')
var router = express.Router()
var read = require('./ctl_login.js')
var create = require('./ctl_register.js')
var update = require('./ctl_update.js')
var del = require('./ctl_delete.js')
var checker = require('../../config/auth_token.js')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Login
router.post('/login', read.login)

// Register
router.post('/register', create.register)

// Edit
router.put('/edit', update.edit)

// Delete
router.delete('/delete', checker.tokenChecker, del.remove)

// Check Username
router.get('/register/:username', create.checkUser)

module.exports = router;