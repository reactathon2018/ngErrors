const jobdetail = require('../models/jobdetails.model.js');
const appliedjobs=require('../models/jobdetails.model.js');

// Retrieve and return all jobdetails from the database.
exports.findAll = (req, res) => {
    console.log("Inside  jobdetail controller");
    jobdetail.find()
    .then(jobdetails => {
        res.send(jobdetails);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving applicants."
        });
    });
};

// Retrieve and return all applicaappliedjobsnts from the database.
exports.findAppliedAll = (req, res) => {
    console.log("Inside controler");
    appliedjobs.find()
    .then(applicants => {
        res.send(applicants);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving applicants."
        });
    });
};


// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.JobId) {
        return res.status(400).send({
            message: "Job Details content can not be empty"
        });
    }

    // Create a JobDetails
    const jobdetail1 = new jobdetail({
        JobId: req.body.JobId,
    JobName: req.body.JobName,
    JobDescription:req.body.JobDescription
       
    });

    // Save Note in the database
    jobdetail1.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the JObdetails."
        });
    });
};

