

// $('form').submit(function(e) {

  // e.preventDefault();

  // Your Flickr ID
  var $flickrID = '35034351041';
  var $flickrTag = 'Scandinavia';

  // the AJAX part
  // https://api.flickr.com/services/rest/?method=flickr.urls.lookupGallery&api_key=5a633d70f60f00ae9bf7ed5b5adbd67f&format=json

  var $flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?id=' + $flickrID + '@N01&jsoncallback=?';
  // var $flickerAPI = 'https://api.flickr.com/services/rest/?method=flickr.urls.lookupGallery&api_key=5a633d70f60f00ae9bf7ed5b5adbd67f&format=json?jsoncallback=?';

  // var $flickrTag = $('input[type="search"]').val();
  var $flickrOptions = {
    tags: $flickrTag,
    format: "json"
  };

  // console.log($searchQuery);


  function displayPhotos(data) {
    // console.log(data);
    var $photoHTML = '';

    $.each(data.items,function(i,photo) {

      var thumbnailURL = photo.media.m;
      var imgURL = thumbnailURL.replace("_m.jpg", "_z.jpg");  // converts thumbnail to larger photo
      var imgDate = (photo.published).slice(0, 10);
      var imgTitle = photo.title;

      $photoHTML += '<li>';
      $photoHTML += '<a href="' + photo.link + '">';
      // console.log(imgURL);
      $photoHTML += '<img src="' + imgURL + '"></a>';
      $photoHTML += '<h3>' + imgTitle + '</h3>';
      $photoHTML += '<p class="caption">' + imgDate + '</p>';
      $photoHTML += '</li>';
    }); // end each
    // $photoHTML += '</ul>';
    $('#photos').html($photoHTML);
  }

  $.getJSON($flickerAPI, $flickrOptions, displayPhotos);

// }); // end click
