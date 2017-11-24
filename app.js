const express = require('express')
const path = require('path')
const User = require('./modules/user/router.js')
const Project = require('./modules/project/router.js')
var bodyParser = require('body-parser')
require("./config/db_connect.js")
const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

//Routers
app.use('/user', User)
app.use('/project', Project)

app.listen(3000, () => console.log('Example app listening on port 3000!'));