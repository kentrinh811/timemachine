'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TasksSchema = new Schema({

  planned_date: Date,
  name: String,
  planned_hours: Number,
  actual_hours: {type : String, default: '0'},
  start_time: {type : Date, default: null},
  end_time: {type : Date, default: null},
  project: {type: String, ref: "Project"},
  note: {type : String, default: null}
  
});

module.exports = mongoose.model('Tasks', TasksSchema);