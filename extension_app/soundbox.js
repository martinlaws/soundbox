// access to values in the page
// saving url to db from the address bar
// why is it running more than once? looks like whenever something changes on the page, these scripts run (like, when I paused the song)


$(document).ready(function() {

  $('input').on('click', function(event) {

    chrome.tabs.query({url: "https://soundcloud.com/*"}, function(tab) {
      $('form').append('<p>' + tab[0].url + '</p>');
      return tab[0].url;
    });

    event.preventDefault();
  });

});

// window.onscroll or a setInterval to check for new elements
// button only shows up on hover so that we're not crowding the page
// add box-menu right at the beginning but you can change its display properties when you need it
// clicking on the add button does what? allows you to add to a box or to send to a friend
// need to grab the url for adding to a box
// clicking on address bar icon takes you to the soundbox page itself
// on first visit to the page, have a little popup from a button that tells you what to do with the buttons that will appear on hover!
// background permission for notifications