var express = require("express");
var router  = express.Router();

// Models
var Post = require("./models/post");
var Project = require("./models/project");
var Talk = require("./models/talk");

router.get('/', function(req, res) {
  Post.find({}, function(err, allPosts) {
    if (err) {
      console.log(err);
    } else {
      allPosts = allPosts.sort(sort_by_date);
      res.render("blog", {posts: allPosts, title: "", flag: true});
    }
  });
});

router.get('/post/:id', function(req, res) {
  Post.findById(req.params.id).exec(function(err, foundPost) {
    if(err) {
      console.log(err);
    } else {
      var title = foundPost["title"].toLowerCase();
      res.render("post", {post: foundPost, title: title, flag: true});
    }
  });
});

router.get('/resume', function(req, res) {
  res.render("resume", {title: "Resume", flag: false})
});

router.get('/projects', function(req, res) {
  Project.find({}, function(err, allProjects) {
    if (err) {
      console.log(err);
    } else {
      res.render("projects", {projects: allProjects, title: "Projects", flag: false});
    }
  });
});

router.get('/talks', function(req, res) {
  Talk.find({}, function(err, allTalks) {
    if (err) {
      console.log(err);
    } else {
      allTalks = allTalks.sort(sort_by_date);
      res.render("talks", {talks: allTalks, title: "Talks", flag: false});
    }
  });
});

function sort_by_date(a, b) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

module.exports = router;
