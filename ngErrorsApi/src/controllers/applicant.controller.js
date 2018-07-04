const applicant = require('../models/applicant.model.js');

// Retrieve and return all applicants from the database.
exports.findAll = (req, res) => {
    console.log("Inside controler");
    applicant.find()
    .then(applicants => {
        res.send(applicants);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving applicants."
        });
    });
};



// Find a logged in user
exports.findOne = (req, res) => {
    var AppliName=req.body.ApplicantName;
    var pwd;
    console.log((req.body));
    //console.log(rq.body.ApplicantName);
    // var query = dbSchemas.SomeValue.find({}).select({ "name": 1, "_id": 0});
    applicant.find({"ApplicantName":req.body.ApplicantName})
    .then(Applicants => {
        
        if(!Applicants) {
           
            return res.status(404).send({
                message: "false"
            });            
        }  
        
        if(Applicants[0].ApplicantPwd === req.body.ApplicantPwd){
            res.send("true");
        }
        else {return res.status(404).send({
            message: "false"
        })
      ;
    }
       
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "false"
            });                
        }
        return res.status(500).send({
            message: "false"
        });
    });
};

// create a new user for applicants
exports.create = (req, res) => {
    // Validate request
    if(!req.body.ApplicantId) {
        return res.status(400).send({
            message: "Aplicants content can not be empty"
        });
    }

    // Create a Aplicants
    const Aplicants = new applicant({
        ApplicantId: req.body.ApplicantId,
    ApplicantName: req.body.ApplicantName,
    ApplicantPwd: req.body.ApplicantPwd,
    Description:req.body.Description,
    AppliedJobs:{jobId:req.body.AppliedJobs.JobId,
    AppliedDate: new Date() }
    });
   
     console.log(Aplicants);

    // Save Note in the database
    Aplicants.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Applicant."
        });
    });
};




// Update a Applciant identified and applied job
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Application content can not be empty"
        });
    }

    // Find note and update it with the request body
    applicant.findByIdAndUpdate(req.params.ApplicantId, {
        ApplicantName: req.body.ApplicantName,
        AppliedDate:{jobId: req.body.ApplicantJobId,
       AppliedDate:new Date()
    }}, {new: true})
    .then(Applciants => {
        if(!Applicants) {
            return res.status(404).send({
                message: "Applicant not found with Name " + req.params.ApplicantName
            });
        }
        res.send(Applicants);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Applicant not found with name " + req.params.ApplicantName
            });                
        }
        return res.status(500).send({
            message: "Error updating Applicant with name " + req.params.ApplicantName
        });
    });
};


