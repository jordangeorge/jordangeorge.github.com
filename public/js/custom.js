$(document).ready(function() {
  // for life page
  var ig_user_id = config.IG_USER_ID;
  var ig_access_token = config.IG_ACCESS_TOKEN;

  var userFeed = new Instafeed({
    get: 'user',
    userId: ig_user_id,
    resolution: 'standard_resolution',
    accessToken: ig_access_token,
    sortBy: 'most-recent',
    template: '<div class="col-lg-4 col-md-6 col-sm-12 instaimg"> \
                  <a href="{{image}}" title="{{caption}}" target="_blank"> \
                      <img src="{{image}}" alt="{{caption}}" class="img-fluid"/> \
                  </a> \
              </div>'
  });
  userFeed.run();

  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true
    }
  });
});
