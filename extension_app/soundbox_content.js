$().ready(function() {

  var boxIcon = chrome.extension.getURL("box.png");
  var closeIcon = chrome.extension.getURL("close.png");

  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>');

<<<<<<< HEAD
  var $soundBoxMenu = $('<div id="option-menu"><button class="close"><img class="icon" id="close-button" title="Close Window" src="' +
    closeIcon + '" /></button></div>');

  $('body').append($soundBoxMenu);

=======
>>>>>>> 35b68fb4a482cb08d088501e450ed14343e1298a
  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {
      var trackURL = $(this).children('a').prop('href');
      var trackInfo = $(this).find('span.sc-artwork').attr('aria-label').split("-");
      var trackTitle = trackInfo[0];
      var trackArtist = trackInfo[1];

      trackData["url"] = trackURL;
      trackData["title"] = trackTitle.replace(/\s+/g, ' ').trim();
      trackData["artist"] = trackArtist.replace(/\s+/g, ' ').trim();

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
  
  setInterval(addButton, 1000);

<<<<<<< HEAD
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
=======




  // for buttons on individual tracks

  // function addIndividualButton() {
  //   $('.compactTrackListItem__content').not('.appended').addClass('appended').prepend($soundBoxButton);
  // }
  
  // setInterval(addIndividualButton, 1000);

  // function findPlayedTrackData() {
  //   var trackURL = $('.playbackSoundBadge__title')[0].href;
  //   trackData["url"] = trackURL;
  // }

  // $('.compactTrackListItem__content').on('click', function() {
  //   var trackInfo = $(this).find('span.compactTrackListItem__trackTitle').text().split("-");
  //   var trackTitle = trackInfo[0];
  //   var trackArtist = trackInfo[1];

  //   trackData["title"] = trackTitle.replace(/\s+/g, ' ').trim();
    // trackData["artist"] = trackArtist.replace(/\s+/g, ' ').trim();

  //   setTimeout(findPlayedTrackData, 1000);

  //   chrome.runtime.sendMessage({
  //     method: 'POST',
  //     action: 'xhttp',
  //     // url: 'http://localhost:3000/api/users/' + id + '/boxes/' + boxId + '/tracks',
  //     url: 'http://localhost:3000/api/tracks',
  //     data: {track: trackData}
  //   }, function(response) {
  //     console.log(response);
  //       /*Callback function to deal with the response*/
  //   });
  // });
>>>>>>> 35b68fb4a482cb08d088501e450ed14343e1298a

  setInterval(addButton, 1000);
});
