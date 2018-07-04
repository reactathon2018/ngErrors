const mongoose = require('mongoose');

const appliedjobsSchema = mongoose.Schema({
    JobId: Number,
    JobName: String,
   JobDescription:String,
   interviewerFeedback:String
});

module.exports = mongoose.model('appliedjobs', appliedjobsSchema);