// Loads environment variables from .env
require('dotenv').config()

// Dependencies
var express         = require('express'),
    app             = express(),
    mongoose        = require("mongoose"), // allows communication between mongodb and express
    bodyParser      = require("body-parser"), // pull information from HTML POST
    methodOverride  = require("method-override");

var seedDB = require("./seeds");
var port = process.env.PORT || 8000;

// Sets the connection to MongoDB
var mongo_url = ""
if (port == 8000) { // dev
  mongo_url = "mongodb://localhost/jordangeorge";
  var morgan = require("morgan");
  app.use(morgan('dev')); // log with Morgan
  seedDB(); // seed the local mongo database
} else { // start
  mongo_url = process.env.DATABASEURL;
}
mongoose.connect(mongo_url, { useNewUrlParser: true });

// More app setup
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// Routes
var routes = require('./routes');
app.use("/", routes);

// Listening
var port_number = server.listen(process.env.PORT || 8000);
app.listen(port_number);
