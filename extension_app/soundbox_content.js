$().ready(function() {

  var trackURL;
  var boxIcon = chrome.extension.getURL("box.png");
  var closeIcon = chrome.extension.getURL("close.png");

  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>');
  var $soundBoxMenu = $('<div id="option-menu"><button class="close"><img class="icon" id="close-button" title="Close Window" src="' + 
    closeIcon + '" /></button></div>');

  $('body').append($soundBoxMenu);

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {
      
      trackURL = $(this).children('a').prop('href');
      $('#option-menu').addClass('show-menu').append($('<p>' + trackURL + '</p>'));

      chrome.runtime.sendMessage({track: trackURL}, function(response) {
        console.log(response.message);
      });

      // $.ajax({
      //   url:'http://localhost:3000/boxes',
      //   method: 'POST',
      //   dataType:'string',
      //   success: function(response) {
      //     console.log(response);
      //   }
      //   // success: function(trackURL) {
      //   //   $('#target-div').text(trackURL);
      //   //   console.log('success!');
      //   // }
      //  });
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


});