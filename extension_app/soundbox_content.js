
//why is it running more than once? looks like whenever something changes on the page, these scripts run (like, when I paused the song)


// var myFunc = function() {
//   console.log("I'm running");
//   var trackURL = window.location.href;
//   console.log(trackURL);
//   // var track = document.getElementsByClassName('soundTitle__title')[0];
//   // console.log(track.href);

// }
$().ready(function() {
  var custom_icon = chrome.extension.getURL("box.png");
  var $soundBoxButton = $('<button class="icon-button"><img class="sc-button-small sc-button-responsive" title="Add to Soundbox" src="' + custom_icon + '" /></button>');

  var $customIconImage = $('<img class="icon" title="Add to Soundbox" src="' + custom_icon + '" />');
  // $('.soundStats.sc-ministats-group').append($soundBoxButton).clone();
  // $('.compactTrackListItem__content').append($soundBoxButton).clone(); // doesn't show up on the elements that don't load on the first
  // // page load (like, if you scroll down and the page needs to load more items)
  // $('.playbackSoundBadge__actions').append($customIconImage).clone();

    // $('.soundList__item').append($soundBoxButton);
    $('.soundActions.sc-button-toolbar.soundActions__small').append($soundBoxButton).on('click', function() {
      alert('test!')
    })

    // $('.btn-soundbox').live('click', function() {
    //   alert('test!');
    // });

    // $('.compactTrackListItem__content').append($soundBoxButton);


  // window.setInterval(addButton, 3000);
});




  // $('.soundActions.sc-button-toolbar.soundActions__medium').append($customIconImage);


// var intervalId = intervalTrigger();
// window.clearInterval(intervalId);


//*** from player: $('.playbackSoundBadge__title') finds you the href for the current track
// remember .href works to get the attr cuz it's an object



// maybe for now, you can append these tracks to the page. how do you store the html popup?
// inject an add button into div for each track. same functionality as the address bar icon

// click on soundbox icon, it opens up your soundbox to add to the box of your choice
// maybe show most popular boxes
// also have an option for sending to a friend
