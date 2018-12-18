container()

function container() {
  const blog_id = config.BLOG_ID
  const api_key = config.BLOGGER_SECRET_API_KEY

  var pageUrl = window.location.href;
  var index = pageUrl.lastIndexOf("/");
  var post_id = pageUrl.substring(index+1, pageUrl.length)

  var url = "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts/" + post_id + "?key=" + api_key

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
    document.getElementById("post-content").innerHTML = "<div class=\"post\"><h1>" + response.title + "</h1>" + response.content + "</div>";
  }

  var client = new HttpClient();
  client.get(url, function(response) {
    response = JSON.parse(response);
    handleResponse(response);
  });
}
