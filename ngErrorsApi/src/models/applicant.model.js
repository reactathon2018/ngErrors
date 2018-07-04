const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
    ApplicantId: Number,
    ApplicantName: String,
    ApplicantPwd:String,
    Description:String,
    AppliedJobs:{jobId:Number,
                 AppliedDate :Date}
});

/*
CountersSchema.pre('save', function(next) {
    var doc = this;
counters.findByIdAndUpdate({_id: 'ApplicantId'},{$inc: { seq: 1}},{"upsert": true,"new": true  }, function(error, counter)   {
    if(error)
        return next(error);
    doc.caseStudyNo = counter.seq;
    next();
});
*/
module.exports = mongoose.model('applicant', ApplicantSchema);