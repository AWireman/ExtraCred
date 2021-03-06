// Dependencies
// -----------------------------------------------------
var express         = require('express');
var mysql           = require('mysql');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var database        = require('./app/config');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();

global.users = [];
var defaultUser_a = {
  firstname: "a",
  lastname: "a",
  username: "a",
  password: "a",
  email: "a",
  accountType: "User"
};

var defaultUser_d = {
  firstname: "d",
  lastname: "d",
  username: "d",
  password: "d",
  email: "d",
  accountType: "Administrator"
};

global.users.push(defaultUser_a);
global.users.push(defaultUser_d);

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
//mongoose.connect(database.mongolab.url);

// DB connection info
/*var con = mysql.createConnection({
  host: "bobbindb.chwrjcnilfzs.us-west-2.rds.amazonaws.com",
  user: "root",
  password: "password",
  port: "3306",
  database: "bobbin"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});*/



// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

// Routes
// ------------------------------------------------------
require('./app/routes.js')(app);

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);
