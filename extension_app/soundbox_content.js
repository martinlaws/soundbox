$().ready(function() {

  var trackData = {};
  var boxIcon = chrome.extension.getURL("box.png");
  var closeIcon = chrome.extension.getURL("close.png");

  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>');
  // var trackInput = '<input type="hidden" value="tracks" /><input type="submit" value="Send to Soundbox" />'
  // var trackForm = '<form id="crate" action="/boxes" method="post">' + trackInput + '</form>';
  // var $soundBoxMenu = $('<div id="option-menu"><button class="close"><img class="icon" id="close-button" title="Close Window" src="' + 
  //   closeIcon + '" /></button>' + trackForm + '</div>');

  // $('body').append($soundBoxMenu);

  function addIndividualButton() {
    // var $individualButton = '<div class="sc-button-share sc-button sc-button-small sc-button-responsive">' + $soundBoxButton + '</div';
    $('.compactTrackListItem__content').not('.appended').addClass('appended').prepend($soundBoxButton);
    // $('.sc-artwork.sc-artwork-placeholder-8 ')
  }

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {

      var trackURL = $(this).children('a').prop('href');
      var trackInfo = $(this).find('span.sc-artwork').attr('aria-label');
      if (trackInfo.indexOf("-") > -1 ){
        trackInfo.split(" - ");
        var trackTitle = trackInfo[0];
        var trackArtist = trackInfo[1];
      } else {
        var trackTitle = trackInfo;
        var trackArtist = ""; 
      }

      trackData["url"] = trackURL;
      trackData["title"] = trackTitle;
      trackData["artist"] = trackArtist;
      $('#option-menu').addClass('show-menu').append($('<p>' + trackData + '</p>'));

      chrome.runtime.sendMessage({
        method: 'POST',
        action: 'xhttp',
        url: 'http://localhost:3000/api/users/:id/boxes/:box_id/tracks',
        data: {track: trackData}
      }, function(response) {
        console.log(response);
        /*Callback function to deal with the response*/
      });

    });
  }

  function findPlayedTrackData() {
    var trackURL = $('.playbackSoundBadge__title')[0].href;
    trackData["url"] = trackURL;
  }

  setInterval(addButton, 1000);
  setInterval(addIndividualButton, 1000);

  $('#close-button').on('click', function() {
    $('#option-menu').removeClass('show-menu');
  });

  $('.compactTrackListItem__content').on('click', function() {
    var trackInfo = $(this).find('span.compactTrackListItem__trackTitle').text().split("-");
    var trackTitle = trackInfo[0];
    var trackArtist = trackInfo[1];

    trackData["title"] = trackTitle;
    trackData["artist"] = trackArtist;
    setTimeout(findPlayedTrackData, 1000);
  });

 $('.icon-button').on('click', function() {
  console.log("do something");
 });
  // $('#crate').on('submit', function(event) {
  //     event.preventDefault();
  //     chrome.runtime.sendMessage({
  //     method: 'POST',
  //     action: 'xhttp',
  //     url: 'http://localhost:3000/api/users/:id/boxes/:box_id/tracks',
  //     data: {track: trackData}
  //   }, function(response) {
  //     console.log(response);
  //   /*Callback function to deal with the response*/
  //   });

  // });

});