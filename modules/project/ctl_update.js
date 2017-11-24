var Project = require('./schema_project.js')
var Task = require('./schema_task.js')

module.exports.editProject = function (req, res) {
  var projectinfo = {
    name: req.body.name,
    description: req.body.description || null
  }
  var query = { '_id': req.body.id }
  Project.update(query, projectinfo, function (err, doc) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(doc)
  })
}
module.exports.editTask = function (req, res) {
  var projectinfo = {
    name: req.body.name,
    description: req.body.description || null
  }
  var query = { '_id': req.body.id }
  Task.update(query, projectinfo, function (err, doc) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(doc)
  })
}