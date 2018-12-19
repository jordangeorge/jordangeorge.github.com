// Get environment variables
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
// var mongo_url = process.env.DATABASEURL
// var mongo_url = "mongodb://localhost/jordangeorge";
mongoose.connect(mongo_url, { useNewUrlParser: true });

// Logging and Parsing
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev')); // log with Morgan
app.use(methodOverride("_method"));
// seedDB(); // seed the local mongo database

// Models
var Post = require("./models/post");
var Project = require("./models/project");
var Talk = require("./models/talk");

// Routes
app.get('/', function(req, res) {
  Post.find({}, function(err, allPosts) {
     if (err) {
         console.log(err);
     } else {
        res.render("blog", {posts: allPosts});
     }
  });
});

app.get('/post/:id', function(req, res) {
  Post.findById(req.params.id).populate("comments").exec(function(err, foundPost) {
      if(err) {
          console.log(err);
      } else {
          console.log(foundPost)
          res.render("post", {post: foundPost});
      }
  });
});

app.get('/resume', function(req, res) {
  res.render("resume")
});

app.get('/projects', function(req, res) {
  Project.find({}, function(err, allProjects) {
     if (err) {
         console.log(err);
     } else {
        res.render("projects", {projects: allProjects});
     }
  });
});

app.get('/talks', function(req, res) {
  Talk.find({}, function(err, allTalks) {
     if (err) {
         console.log(err);
     } else {
        res.render("talks", {talks: allTalks});
     }
  });
});

// Listening
var port = process.env.PORT || 8000
app.listen(port, function () {
  console.log('App listening on port '+ port)
})
