$().ready(function() {

  var boxIcon = chrome.extension.getURL("box.png");
  var $soundBoxButton = $('<button class="icon-button"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>'); 

  function addButton() {
    $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton).on('click', function() {
      var trackURL = $(this).children('a').prop('href');
      console.log(trackURL);
    });
  }

  setInterval(addButton, 1000);

});