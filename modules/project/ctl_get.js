var Project = require('./schema_project.js')
var Task = require('./schema_task.js')

module.exports.getProjectById = function (req, res) {
  Project.findOne({ '_id': req.params.projectId }, function (err, project) {
    if (err) {
      res.status(401).json(err)
    }
    res.status(201).json(project);
  });
}
module.exports.getAllProjects = function (req, res) {
  Project.find({ 'user_id': req.params.userId }, function (err, projects) {
    if (err) {
      res.status(401).json(err)
    }
    res.status(201).json(projects);
  });
}
module.exports.getTaskById = function (req, res) {
  Task.findOne({ '_id': req.params.taskId }, function (err, task) {
    if (err) {
      res.status(401).json(err)
    }
    res.status(201).json(task);
  });
}
module.exports.getAllTasks = function (req, res) {
  Task.find({ 'project_id': req.params.projectId }, function (err, tasks) {
    if (err) {
      res.status(401).json(err)
    }
    res.status(201).json(tasks);
  });
}