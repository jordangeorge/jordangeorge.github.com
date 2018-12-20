// Creates data for the local database

var mongoose = require("mongoose");

// Models
var Post = require("./models/post");
var Project = require("./models/project");
var Talk = require("./models/talk");

var postData = [
  {
    "title": "From Seed",
    "published": "2018-12-18T08:41:00-08:00",

    "content": "\u003cdiv style=\"background-color: white; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; margin-bottom: 15px; padding: 0px; text-align: justify;\"\u003e\nI've created a few other personal/resume websites before. My working site was using jekyll and hyde. But I want to create a new site with a basic but sleek feel to it.\u003cbr /\u003e\n\u003cbr /\u003e\nI was going to use my previous jekyll set up but I couldn't find a way to pass data to my javascript file the way I wanted to. I wanted to be able to have a path such as \"/post/##\" where ## was a blog spot number. Couldn't find a way to do that so I switched to using Node.js because I knew it would work with that.\u003cbr /\u003e\n\u003cbr /\u003e\nI hit another roadblock after thinking I was deploying to my GitHub page. It committed and went to jordangeorge.github.io. I realized it was just my readme file. So I searched for the issue which is that Node.js does not offer suppose for GitHub pages.\u003cbr /\u003e\n\u003cbr /\u003e\nThis lead me to Heroku. I'm having a key problem. I want to hide my blog id and blogger api key but don't know how to accomplish this task at the moment. Right now, I am accessing a hidden file named \"config.js\" which houses my keys but since they are hidden I cannot get the response I need from the blogger api using Heroku.\u003c/div\u003e\n\u003c!--?xml version=\"1.0\" encoding=\"UTF-8\"?--\u003e\n\n"

    // "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie eros in metus sollicitudin feugiat. Suspendisse tortor enim, lacinia sit amet lobortis vel, aliquet sit amet urna. Pellentesque malesuada libero nunc, vel lobortis ex auctor vel. Quisque turpis orci, tempor pretium lacus vitae, pulvinar sollicitudin risus. Nam at sollicitudin ligula, quis rhoncus nisl. Maecenas eget enim dignissim nunc dignissim finibus ac sed ligula. Nunc ac augue ultrices, euismod est eu, commodo mi. Suspendisse pellentesque neque a arcu dapibus, quis efficitur dolor rutrum. Cras efficitur congue magna quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo interdum est vitae venenatis. Quisque ac vulputate nisi. Pellentesque vitae quam ligula.\
    // Proin est justo, ornare dignissim velit quis, vestibulum finibus lorem. Nullam consequat lorem arcu, vitae placerat lectus ultrices sed. Aenean ac sapien ut quam bibendum sagittis eget quis ante. Vivamus scelerisque neque lectus, nec sodales dolor molestie viverra. Pellentesque at semper ex, eget eleifend sapien. Morbi facilisis felis purus, in vehicula metus finibus quis. Quisque diam urna, facilisis id odio eget, malesuada maximus diam.\
    // Aliquam sodales hendrerit elit, ac tristique nibh. Aliquam vestibulum nisi sed dui accumsan porta. Donec consectetur nisl vel dui scelerisque tincidunt. Nunc id nulla enim. Pellentesque convallis lorem quam, eget vestibulum nisl faucibus nec. Curabitur eget dui nec est ullamcorper ullamcorper sed ac justo. Sed eu orci nunc. Aenean nec semper metus. In hac habitasse platea dictumst. In in purus massa. Suspendisse mattis vel lacus at congue. Praesent eget consequat turpis.\
    // Phasellus sed tortor ac erat consectetur molestie ut et tellus. Praesent bibendum risus massa, ac dignissim sapien volutpat aliquam. Pellentesque condimentum, arcu in pellentesque venenatis, purus eros fringilla ligula, tempor hendrerit tortor felis mollis tellus. Sed egestas accumsan urna ut tempor. Mauris porttitor tempus enim, faucibus efficitur sapien tempus sed. Cras iaculis euismod odio sed sollicitudin. Donec mattis, urna et vestibulum porta, nisl nisi consectetur lorem, quis imperdiet lacus mi vel ligula. Etiam blandit dictum lectus, a faucibus nulla fringilla eu.\
    // Morbi id augue quis enim eleifend posuere. Donec eu metus laoreet, posuere ipsum eget, cursus erat. Nam eu quam nec lacus imperdiet luctus. Etiam ut iaculis nisi. Ut aliquam pulvinar tellus, et ornare mi suscipit eu. Duis congue, nulla vel laoreet aliquet, quam magna pretium nibh, sit amet consectetur est sem vitae lorem. Donec rutrum convallis eros vel convallis. Nam a nisl mi. Donec condimentum elit lobortis convallis efficitur. Proin suscipit rhoncus urna nec congue."
  }
]
var projectData = [
  {
    "name": "UparK",
    "description": "An application to tell people where they can park based on their pass or lack thereof."
  }
]
var talkData = [ // notice that this data is not in order
  {
    "name": "How to Swift",
    "date": "2018-12-02T08:41:00-08:00",
    "description": "Demo to members of NSBE on how to program in Swift. Designed so people could follow along on their laptops."
  },
  {
    "name": "How to Swift",
    "date": "2018-12-18T08:41:00-08:00",
    "description": "Demo to members of NSBE on how to program in Swift. Designed so people could follow along on their laptops."
  },
  {
    "name": "How to Swift",
    "date": "2018-12-12T08:41:00-08:00",
    "description": "Demo to members of NSBE on how to program in Swift. Designed so people could follow along on their laptops."
  }
]

function deleteModelData(model, data, singular, plural) {
  // Remove all posts
  model.deleteMany({}, function(err){
    if (err) {
      console.log(err);
    }

    console.log("removed all "+ plural);

    // Add (model)s
    data.forEach(function(seed) {
      model.create(seed, function(err, post) {
        if (err) {
          console.log(err)
        } else {
          console.log("added a " + singular);
        }
      });
    });
  });
}

function seedDB() {
  deleteModelData(Post, postData, 'post', 'posts');
  deleteModelData(Project, projectData, 'project', 'projects');
  deleteModelData(Talk, talkData, 'talk', 'talks');
}

module.exports = seedDB;
