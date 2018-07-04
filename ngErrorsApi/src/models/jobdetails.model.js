const mongoose = require('mongoose');

const JobDetailSchema = mongoose.Schema({
    JobId: Number,
    JobName: String,
   JobDescription:String
});

module.exports = mongoose.model('jobdetail', JobDetailSchema);