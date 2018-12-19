// Creates data for the local database

var mongoose = require("mongoose");

// models
var Post = require("./models/post");
var Project = require("./models/project");
var Talk = require("./models/talk");

var postData = [
  {
    "title": "from seed",
    "published": "2018-12-18T08:41:00-08:00",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie eros in metus sollicitudin feugiat. Suspendisse tortor enim, lacinia sit amet lobortis vel, aliquet sit amet urna. Pellentesque malesuada libero nunc, vel lobortis ex auctor vel. Quisque turpis orci, tempor pretium lacus vitae, pulvinar sollicitudin risus. Nam at sollicitudin ligula, quis rhoncus nisl. Maecenas eget enim dignissim nunc dignissim finibus ac sed ligula. Nunc ac augue ultrices, euismod est eu, commodo mi. Suspendisse pellentesque neque a arcu dapibus, quis efficitur dolor rutrum. Cras efficitur congue magna quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo interdum est vitae venenatis. Quisque ac vulputate nisi. Pellentesque vitae quam ligula.\
    Proin est justo, ornare dignissim velit quis, vestibulum finibus lorem. Nullam consequat lorem arcu, vitae placerat lectus ultrices sed. Aenean ac sapien ut quam bibendum sagittis eget quis ante. Vivamus scelerisque neque lectus, nec sodales dolor molestie viverra. Pellentesque at semper ex, eget eleifend sapien. Morbi facilisis felis purus, in vehicula metus finibus quis. Quisque diam urna, facilisis id odio eget, malesuada maximus diam.\
    Aliquam sodales hendrerit elit, ac tristique nibh. Aliquam vestibulum nisi sed dui accumsan porta. Donec consectetur nisl vel dui scelerisque tincidunt. Nunc id nulla enim. Pellentesque convallis lorem quam, eget vestibulum nisl faucibus nec. Curabitur eget dui nec est ullamcorper ullamcorper sed ac justo. Sed eu orci nunc. Aenean nec semper metus. In hac habitasse platea dictumst. In in purus massa. Suspendisse mattis vel lacus at congue. Praesent eget consequat turpis.\
    Phasellus sed tortor ac erat consectetur molestie ut et tellus. Praesent bibendum risus massa, ac dignissim sapien volutpat aliquam. Pellentesque condimentum, arcu in pellentesque venenatis, purus eros fringilla ligula, tempor hendrerit tortor felis mollis tellus. Sed egestas accumsan urna ut tempor. Mauris porttitor tempus enim, faucibus efficitur sapien tempus sed. Cras iaculis euismod odio sed sollicitudin. Donec mattis, urna et vestibulum porta, nisl nisi consectetur lorem, quis imperdiet lacus mi vel ligula. Etiam blandit dictum lectus, a faucibus nulla fringilla eu.\
    Morbi id augue quis enim eleifend posuere. Donec eu metus laoreet, posuere ipsum eget, cursus erat. Nam eu quam nec lacus imperdiet luctus. Etiam ut iaculis nisi. Ut aliquam pulvinar tellus, et ornare mi suscipit eu. Duis congue, nulla vel laoreet aliquet, quam magna pretium nibh, sit amet consectetur est sem vitae lorem. Donec rutrum convallis eros vel convallis. Nam a nisl mi. Donec condimentum elit lobortis convallis efficitur. Proin suscipit rhoncus urna nec congue."
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
