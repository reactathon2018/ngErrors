const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var cors=require('cors');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "*");
    next();
  })

// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('../routes/note.routes.js')(app);

require('../routes/Applicant.routes.js')(app);

require('../routes/jobdetails.routes')(app);

require('../routes/appliedjobs.routes')(app);
// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

