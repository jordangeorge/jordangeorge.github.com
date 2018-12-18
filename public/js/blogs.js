container()

function container() {
  const blog_id = config.BLOG_ID;
  const api_key = config.BLOGGER_SECRET_API_KEY;

  var url = "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts?key=" + api_key;

  var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
      }

      anHttpRequest.open("GET", aUrl, true );
      anHttpRequest.send( null );
    }
  }

  function handleResponse(response) {
    var arr = response['items']
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      console.log(obj.content);
      document.getElementById("blog-content").innerHTML += "<div class=\"post\"><h1><a href=\"/post/" + obj.id + "\">" + obj.title + "</a></h1>" + obj.content.substring(0, 600) + "...</div>";
    }
  }

  var client = new HttpClient();
  client.get(url, function(response) {
    console.log(response);
    response = JSON.parse(response);
    if (response["items"] != undefined) {
      handleResponse(response);
    } else {
      document.getElementById("content").innerHTML += "<div class=\"post\"><h1 style=\"text-align:center\">No posts to show.</h1></div>";
    }
  });
}
