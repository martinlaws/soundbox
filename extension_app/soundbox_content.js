$().ready(function() {

  var boxIcon = chrome.extension.getURL("box.png");
  var $soundBoxButton = $('<button class="icon-button hide"><img class="icon" title="Add to Soundbox" src="' + boxIcon + '" /></button>'); 

  function addButton() {
     $('.sound__artwork').not('.appended').addClass('appended').append($soundBoxButton);
  }

  setInterval(addButton, 1000);

  // $('.soundList__item').on('mouseover', function() {
  //   $(this).find('.icon-button').show();
  //   $(this).find('.icon-button').removeClass('hide');
  //   $(this).find('.icon-button').addClass('show');
  // });

  // $('.soundList__item').on('mouseleave', function() {
  //   $(this).find('.icon-button').hide();
  //   $(this).find('.icon-button').removeClass('show');
  //   $(this).find('.icon-button').addClass('hide');
  // });

});