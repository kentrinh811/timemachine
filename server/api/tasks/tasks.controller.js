'use strict';

var _ = require('lodash');
var Tasks = require('./tasks.model');

// Get list of taskss
exports.index = function(req, res) {
  Tasks.find(function (err, taskss) {
    if(err) { return handleError(res, err); }
    return res.json(200, taskss);
  });
};

// Get a single tasks
exports.show = function(req, res) {
  Tasks.findById(req.params.id, function (err, tasks) {
    if(err) { return handleError(res, err); }
    if(!tasks) { return res.send(404); }
    return res.json(tasks);
  });
};

// Creates a new tasks in the DB.
exports.create = function(req, res) {
  Tasks.create(req.body, function(err, tasks) {
    if(err) { return handleError(res, err); }
    return res.json(201, tasks);
  });
};

// Updates an existing tasks in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tasks.findById(req.params.id, function (err, tasks) {
    if (err) { return handleError(err); }
    if(!tasks) { return res.send(404); }
    var updated = _.merge(tasks, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, tasks);
    });
  });
};

// Deletes a tasks from the DB.
exports.destroy = function(req, res) {
  Tasks.findById(req.params.id, function (err, tasks) {
    if(err) { return handleError(res, err); }
    if(!tasks) { return res.send(404); }
    tasks.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}