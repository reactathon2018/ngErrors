module.exports = (app) => {
  const jobdetail = require('../controllers/jobdetails.controller');
// Retrieve allJob details
app.get('/applicant', jobdetail.findAll);
app.post('/jobdetails', jobdetail.create);

}