$().ready(function() {

  var boxIcon = chrome.extension.getURL("box.png");
  var closeIcon = chrome.extension.getURL("close.png");

  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>');

  var $soundBoxMenu = $('<div id="option-menu"><button class="close"><img class="icon" id="close-button" title="Close Window" src="' +
    closeIcon + '" /></button></div>');

  $('body').append($soundBoxMenu);

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {
      var trackURL = $(this).children('a').prop('href');
      var trackInfo = $(this).find('span.sc-artwork').attr('aria-label').split("-");
      var trackTitle = trackInfo[0];
      var trackArtist = trackInfo[1];
      // if (trackInfo.indexOf("-") > -1 ){
        // trackInfo.split(" - ");
        // var trackTitle = trackInfo[0];
        // var trackArtist = trackInfo[1];
      // } else {
      //   var trackTitle = trackInfo;
      //   var trackArtist = "";
      // }

      trackData["url"] = trackURL;
      trackData["title"] = trackTitle;
      trackData["artist"] = trackArtist;

      // var id = 1;
      // var boxId = 2;

      chrome.runtime.sendMessage({
        method: 'POST',
        action: 'xhttp',
        // url: 'http://localhost:3000/api/users/' + id + '/boxes/' + boxId + '/tracks',
        url: 'http://localhost:3000/api/tracks',
        data: {track: trackData}
      }, function(response) {
        console.log(response);
        /*Callback function to deal with the response*/
      });
    });
  }

  function findPlayedTrackURL() {
    var playerTrackURL = $('.playbackSoundBadge a').prop('href');
    return playerTrackURL; // so this where you'd have to store to a db because the timeout call only returns its timeout ID
  }

  $('#close-button').on('click', function() {
    $('#option-menu').removeClass('show-menu');
  });

  $('.compactTrackListItem__content').on('click', function() {
    var playerUrl = setTimeout(findPlayedTrackURL, 2000);
  });

<<<<<<< HEAD
  setInterval(addButton, 1000);

=======
>>>>>>> buttons-are-back
});
