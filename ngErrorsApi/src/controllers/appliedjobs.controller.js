
const appliedjobs=require('../models/appliedjobs.model.js');
 ;

// Retrieve and return all applicaappliedjobsnts from the database.
exports.findAppliedAll = (req, res) => {
    console.log("Inside controler applied");
    appliedjobs.find()
    .then(applicants => {
        res.send(applicants);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving applicants."
        });
    });
};
