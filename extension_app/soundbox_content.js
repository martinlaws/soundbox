$().ready(function() {

  var trackURL;
  var boxIcon = chrome.extension.getURL("box.png");
  var closeIcon = chrome.extension.getURL("close.png");
  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>');
  var trackInput = '<input type="hidden" value="tracks" /><input type="submit" value="Send to Soundbox" />'
  var trackForm = '<form id="crate" action="/boxes" method="post">' + trackInput + '</form>';
  var $soundBoxMenu = $('<div id="option-menu"><button class="close"><img class="icon" id="close-button" title="Close Window" src="' + 
    closeIcon + '" /></button>' + trackForm + '</div>');

  var trackData = {};

  $('body').append($soundBoxMenu);

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {
      
      trackURL = $(this).children('a').prop('href');
      // trackTitle = ;
      // trackArtist = ;
      $('#option-menu').addClass('show-menu').append($('<p>' + trackURL + '</p>'));

      trackData["url"] = trackURL;
      return trackData;
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

  setInterval(addButton, 1000);

  $('#crate').on('submit', function(event) {
      event.preventDefault();
      chrome.runtime.sendMessage({
      method: 'POST',
      action: 'xhttp',
      url: 'http://localhost:3000/api/users',
      data: {track: trackData}
    }, function(response) {
      console.log(response);
    /*Callback function to deal with the response*/
    });

    // chrome.runtime.sendMessage({tracks: trackList}, function() {
    //   console.log(tracks);
    //   // console.log(response.message);
    // });
  });

});