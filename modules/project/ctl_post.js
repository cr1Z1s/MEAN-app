var Project = require('./schema_project.js')
var Task = require('./schema_task.js')

module.exports.newProject = function (req, res) {
  var userinfo = {
    name: req.body.name,
    description: req.body.description || null,
    user_id: req.body.userId
  }
  Project.create(userinfo, function (err, doc) {
    if (err) {
      return res.status(401).json(err);
    }
    res.status(201).json(doc)
  })
}
module.exports.newTask = function (req, res) {
  var taskinfo = {
    name: req.body.name,
    description: req.body.description || null,
    project_id: req.body.projectId
  }
  Task.create(taskinfo, function (err, doc) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(doc)
  })
}