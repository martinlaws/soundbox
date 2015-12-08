// access to values in the page
// saving url to db from the address bar
// why is it running more than once? looks like whenever something changes on the page, these scripts run (like, when I paused the song)


// $(document).ready(function() {
//
//   $('input').on('click', function(event) {
//
//     chrome.tabs.query({url: "https://soundcloud.com/*"}, function(tab) {
//       $('form').append('<p>' + tab[0].url + '</p>');
//       return tab[0].url;
//     });
//
//     event.preventDefault();
//   });
//
// });
