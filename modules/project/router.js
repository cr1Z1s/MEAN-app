var express = require('express')
var router = express.Router()
var read = require('./ctl_get.js')
var create = require('./ctl_post.js')
var update = require('./ctl_update.js')
var del = require('./ctl_delete.js')
var checker = require('../../config/auth_token.js')

// get project by id
router.get('/:projectId', read.getProjectById)
// get project by userid
router.get('/all/:userId', read.getAllProjects)
// create project
router.post('/new', create.newProject)
// edit project
router.put('/edit', update.editProject)
// Delete project
router.delete('/delete', checker.tokenChecker, del.removeProject)

// get task by id
router.get('/task/:taskId', read.getTaskById)
// get task by userid
router.get('/allTask/:projectId', read.getAllTasks)
// create task
router.post('/newTask', create.newTask)
// edit task
router.put('/editTask', update.editTask)
// Delete task
router.delete('/deleteTask', checker.tokenChecker, del.removeTask)

module.exports = router;