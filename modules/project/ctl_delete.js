var Project = require('./schema_project.js')
var Task = require('./schema_task.js')

module.exports.removeProject = function (req, res) {
  var query = { '_id': req.body.id }

  Project.remove(query, function (err, success) {
    if (err) {
      res.status(401).json(err);
    }
    res.status(201).json(success)
  })
}
module.exports.removeTask = function (req, res) {
  var query = { '_id': req.body.id }
  
    Task.remove(query, function (err, success) {
      if (err) {
        res.status(401).json(err);
      }
      res.status(201).json(success)
    })
}