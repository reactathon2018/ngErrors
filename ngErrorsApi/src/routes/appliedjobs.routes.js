module.exports = (app) => {
  const appliedjobs = require('../controllers/appliedjobs.controller');
// Retrieve allJob details

app.get('/findAppliedAll',appliedjobs.findAppliedAll);
}