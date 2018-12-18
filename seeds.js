var mongoose = require("mongoose");
var Post = require("./models/post");

var data = [
    {
      title: "from seed",
      published:"String",
      content: "<div>I've created a few other personal/resume websites before. My working site was using jekyll and hyde. But I want to create a new site with a basic but sleek feel to it.<br /><br />I was going to use my previous jekyll set up but I couldn't find a way to pass data to my javascript file the way I wanted to. I wanted to be able to have a path such as \"/post/##\" where ## was a blog spot number. Couldn't find a way to do that so I switched to using Node.js because I knew it would work with that.<br /><br />I hit another roadblock after thinking I was deploying to my GitHub page. It committed and went to jordangeorge.github.io. I realized it was just my readme file. So I searched for the issue which is that Node.js does not offer suppose for GitHub pages.<br /><br />This lead me to Heroku. I'm having a key problem. I want to hide my blog id and blogger api key but don't know how to accomplish this task at the moment. Right now, I am accessing a hidden file named \"config.js\" which houses my keys but since they are hidden I cannot get the response I need from the blogger api using Heroku.</div>"
    }
]

function seedDB() {
   // Remove all posts
   Post.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        }

        console.log("removed posts");

        // Add posts
        data.forEach(function(seed) {
            Post.create(seed, function(err, post) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a post");
                }
            });
        });
    });
}

module.exports = seedDB;
