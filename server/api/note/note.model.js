'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
    date_start: {
        type: Date
        
    },
    date_end: {
        type: Date,
    },
    project :{
        type: String
    },
    name: String,
    content: String,
    active: Boolean
});

module.exports = mongoose.model('Note', NoteSchema);
