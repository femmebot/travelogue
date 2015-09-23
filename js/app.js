

$('form').submit(function(e) {

  e.preventDefault();

  // Your Flickr ID
  var $flickrID = '35034351041';

  // the AJAX part
  // https://api.flickr.com/services/rest/?method=flickr.urls.lookupGallery&api_key=5a633d70f60f00ae9bf7ed5b5adbd67f&format=json

  var $flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?id=' + $flickrID + '@N01&jsoncallback=?';
  // var $flickerAPI = 'https://api.flickr.com/services/rest/?method=flickr.urls.lookupGallery&api_key=5a633d70f60f00ae9bf7ed5b5adbd67f&format=json?jsoncallback=?';

  var $searchQuery = $('input[type="search"]').val();
  var $flickrOptions = {
    tags: $searchQuery,
    format: "json"
  };

  // console.log($searchQuery);


  function displayPhotos(data) {
    // console.log(data);
    var $photoHTML = '<ul>';
    $.each(data.items,function(i,photo) {
      $photoHTML += '<li>';
      // $photoHTML += '<li class="grid-25 tablet-grid-50">';
      $photoHTML += '<a href="' + photo.link + '" class="image">';
      var thumbnailURL = photo.media.m;
      var imgURL = thumbnailURL.replace("_m.jpg", "_b.jpg");  // converts thumbnail to larger photo
      var imgDate = photo.published;
      var imgTitle = photo.title;
      console.log(imgURL);
      $photoHTML += '<img src="' + imgURL + '"></a>';
      $photoHTML += '<p>' + imgTitle + '</p>';
      $photoHTML += '<p>' + imgDate.slice(0, 10) + '</p>';
      $photoHTML += '</li>';
    }); // end each
    $photoHTML += '</ul>';
    $('#photos').html($photoHTML);
  }

  $.getJSON($flickerAPI, $flickrOptions, displayPhotos);

}); // end click
