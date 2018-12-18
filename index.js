// Dependencies
var express = require('express'),
    app     = express(),
    morgan  = require("morgan");

// App configuration
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev')); // log with Morgan

// Routes
app.get('/', function(req, res) {
  res.render("blog")
});

app.get('/post/:id', function(req, res) {
  res.render("post")
});

app.get('/resume', function(req, res) {
  res.render("resume")
});

app.get('/projects', function(req, res) {
  res.render("projects")
});

app.get('/talks', function(req, res) {
  res.render("talks")
});

// Listening
var port = process.env.PORT || 8000
app.listen(port, function () {
  console.log('App listening on port '+ port +'!')
})
