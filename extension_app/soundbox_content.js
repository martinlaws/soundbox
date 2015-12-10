$().ready(function() {

  var boxIcon = chrome.extension.getURL("box.png");
  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>'); 

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {
      var trackURL = $(this).children('a').prop('href');
      console.log(trackURL);
    });
  }

  function findPlayedTrackURL() {
    var playerTrackURL = $('.playbackSoundBadge a').prop('href');
    return playerTrackURL; // so this where you'd have to store to a db because the timeout call only returns its timeout ID
  }

  $('.compactTrackListItem__content').on('click', function() {
    var playerUrl = setTimeout(findPlayedTrackURL, 2000);
  });

  setInterval(addButton, 1000);

});