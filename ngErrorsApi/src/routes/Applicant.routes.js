module.exports = (app) => {
    const applicant = require('../controllers/applicant.controller.js');
  // Retrieve all Notes
  app.get('/applicantGet', applicant.findAll);
  
  app.post('/applicant', applicant.create);
   // Retrieve a single Note with noteId
   app.post('/applicantLogin', applicant.findOne);
   app.post('/AppliedJobs',applicant.update);
}