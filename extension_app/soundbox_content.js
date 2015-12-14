$().ready(function() {

  var trackData = {};
  var boxIcon = chrome.extension.getURL("box.png");

  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>');

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {

      var userName = $('.userNav__username').text();
      var trackURL = $(this).children('a').prop('href');
      // not all title/artist separated by hyphen!
      var trackInfo = $(this).find('span.sc-artwork').attr('aria-label').split("-");
      var trackTitle = trackInfo[0];
      var trackArtist = trackInfo[1];

      trackData["username"] = userName;
      trackData["url"] = trackURL;
      trackData["title"] = trackTitle.replace(/\s+/g, ' ').trim();
      trackData["artist"] = trackArtist.replace(/\s+/g, ' ').trim();

      chrome.runtime.sendMessage({
        method: 'POST',
        action: 'xhttp',
        url: 'http://localhost:3000/api/tracks',
        data: {track: trackData}
      }, function(response) {
        console.log(response);
        /*Callback function to deal with the response*/
      });

    });
  }

  setInterval(addButton, 1000);


  // function addIndividualButton() {
  //   $('.compactTrackListItem__content').not('.appended').addClass('appended').prepend($soundBoxButton);
  // }


  // setInterval(addIndividualButton, 1000);

  // function findPlayedTrackData() {
  //   var trackURL = $('.playbackSoundBadge__title')[0].href;
  //   trackData["url"] = trackURL;
  // }

  // setInterval(addIndividualButton, 1000);

  // $('#close-button').on('click', function() {
  //   $('#option-menu').removeClass('show-menu');
  // });

  // $('.compactTrackListItem__content').on('click', function() {
  //   var trackInfo = $(this).find('span.compactTrackListItem__trackTitle').text().split("-");
  //   var trackTitle = trackInfo[0];
  //   var trackArtist = trackInfo[1];

  //   trackData["title"] = trackTitle;
  //   trackData["artist"] = trackArtist;
  //   setTimeout(findPlayedTrackData, 1000);
  // });

});
