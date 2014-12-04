/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tasks = require('./tasks.model');

exports.register = function(socket) {
  Tasks.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Tasks.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tasks:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tasks:remove', doc);
}