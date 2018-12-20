// Loads environment variables from .env
require('dotenv').config()

// Dependencies
var express         = require('express'),
    app             = express(),
    mongoose        = require("mongoose"), // allows communication between mongodb and express
    bodyParser      = require("body-parser"), // pull information from HTML POST
    morgan          = require("morgan"),
    methodOverride  = require("method-override"),
    seedDB          = require("./seeds");

// Express Configuration
// Sets the connection to MongoDB
var mongo_url = process.env.DATABASEURL || "mongodb://localhost/jordangeorge";
// var mongo_url = "mongodb://localhost/jordangeorge";
mongoose.connect(mongo_url, { useNewUrlParser: true });

// Logging and parsing
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev')); // log with Morgan
app.use(methodOverride("_method"));
// seedDB(); // seed the local mongo database

// Routes
var routes = require('./routes');
app.use("/", routes);

// Listening
var port = process.env.PORT || 8000
app.listen(port, function () {
  console.log('App listening on port ' + port + '. Go to http://localhost:' + port + ".")
})
