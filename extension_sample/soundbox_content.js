
//why is it running more than once? looks like whenever something changes on the page, these scripts run (like, when I paused the song)


// var myFunc = function() {
//   console.log("I'm running");
//   var trackURL = window.location.href;
//   console.log(trackURL);
//   // var track = document.getElementsByClassName('soundTitle__title')[0];
//   // console.log(track.href);

// }
$(document).ready(function() {

  var custom_icon = chrome.extension.getURL("box.png");
  var $customIconImage = $('<img class="icon" title="Add to Soundbox" src="' + custom_icon + '" />');
  // var $soundBoxButton = $('<button class="sc-button-share sc-button sc-button-small sc-button-responsive">' + $customIconImage + '</button>');
  $('.soundStats.sc-ministats-group').append($customIconImage).clone(); // doesn't show up on the elements that don't load on the first
  // page load (like, if you scroll down and the page needs to load more items)
  $('.playbackSoundBadge__actions').append($customIconImage).clone();
  // $('.soundActions.sc-button-toolbar.soundActions__medium').append($customIconImage);
});
// <button class="sc-button-share sc-button sc-button-small sc-button-responsive" 
// aria-describedby="tooltip-311" tabindex="0" aria-haspopup="true" role="button" 
// aria-owns="dropdown-button-312" title="Share">Share</button>
// function intervalTrigger() {
//   return window.setInterval(myFunc, 3000);
// }


// var intervalId = intervalTrigger();
// window.clearInterval(intervalId);


//*** from player: $('.playbackSoundBadge__title') finds you the href for the current track
// remember .href works to get the attr cuz it's an object


// could you do an onclick event for your soundbox button - I guess that's what activeTabe refers to, once you press the icon in 
//  <a class="soundTitle__title sc-link-dark" href="/kompakt/clarian-ver-11-am-mix">

// when the extension is first installed
// chrome.runtime.onInstalled.addListener(function(details) {
//     chrome.storage.sync.set({be_a_buzzkill: true});
// });

// listen for any changes to the URL of any tab.
// chrome.tabs.onUpdated.addListener(function(id, info, tab){


//     if (tab.url.toLowerCase().indexOf("soundcloud.com") > -1){
//         chrome.pageAction.show(tab.id);

//         chrome.storage.sync.get("be_a_buzzkill", function(data){
//             if (data["be_a_buzzkill"] && tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
//                 chrome.tabs.update(tab.id, {url: "http://www.facebook.com/?no-buzzfeed-for-you!"});
//             }
//         });
//     }

// });

// function getCurrentTabUrl(callback) {
//   // Query filter to be passed to chrome.tabs.query - see
//   // https://developer.chrome.com/extensions/tabs#method-query
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     // chrome.tabs.query invokes the callback with a list of tabs that match the
//     // query. When the popup is opened, there is certainly a window and at least
//     // one tab, so we can safely assume that |tabs| is a non-empty array.
//     // A window can only have one active tab at a time, so the array consists of
//     // exactly one tab.
//     var tab = tabs[0];

//     // A tab is a plain object that provides information about the tab.
//     // See https://developer.chrome.com/extensions/tabs#type-Tab
//     var url = tab.url;

//     // tab.url is only available if the "activeTab" permission is declared.
//     // If you want to see the URL of other tabs (e.g. after removing active:true
//     // from |queryInfo|), then the "tabs" permission is required to see their
//     // "url" properties.
//     console.assert(typeof url == 'string', 'tab.url should be a string');

//     callback(url);
//   });

//   // Most methods of the Chrome extension APIs are asynchronous. This means that
//   // you CANNOT do something like this:
//   //
//   // var url;
//   // chrome.tabs.query(queryInfo, function(tabs) {
//   //   url = tabs[0].url;
//   // });
//   // alert(url); // Shows "undefined", because chrome.tabs.query is async.
// }

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */
// function getImageUrl(searchTerm, callback, errorCallback) {
//   // Google image search - 100 searches per day.
//   // https://developers.google.com/image-search/
//   var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' +
//     '?v=1.0&q=' + encodeURIComponent(searchTerm);
//   var x = new XMLHttpRequest();
//   x.open('GET', searchUrl);
//   // The Google image search API responds with JSON, so let Chrome parse it.
//   x.responseType = 'json';
//   x.onload = function() {
//     // Parse and process the response from Google Image Search.
//     var response = x.response;
//     if (!response || !response.responseData || !response.responseData.results ||
//         response.responseData.results.length === 0) {
//       errorCallback('No response from Google Image search!');
//       return;
//     }
//     var firstResult = response.responseData.results[0];
//     // Take the thumbnail instead of the full image to get an approximately
//     // consistent image size.
//     var imageUrl = firstResult.tbUrl;
//     var width = parseInt(firstResult.tbWidth);
//     var height = parseInt(firstResult.tbHeight);
//     console.assert(
//         typeof imageUrl == 'string' && !isNaN(width) && !isNaN(height),
//         'Unexpected response from the Google Image Search API!');
//     callback(imageUrl, width, height);
//   };
//   x.onerror = function() {
//     errorCallback('Network error.');
//   };
//   x.send();
// }

// function renderStatus(statusText) {
//   document.getElementById('status').textContent = statusText;
// }

// document.addEventListener('DOMContentLoaded', function() {
//   getCurrentTabUrl(function(url) {
//     // Put the image URL in Google search.
//     renderStatus('Performing Google Image search for ' + url);

//     getImageUrl(url, function(imageUrl, width, height) {

//       renderStatus('Search term: ' + url + '\n' +
//           'Google image search result: ' + imageUrl);
//       var imageResult = document.getElementById('image-result');
//       // Explicitly set the width/height to minimize the number of reflows. For
//       // a single image, this does not matter, but if you're going to embed
//       // multiple external images in your page, then the absence of width/height
//       // attributes causes the popup to resize multiple times.
//       imageResult.width = width;
//       imageResult.height = height;
//       imageResult.src = imageUrl;
//       imageResult.hidden = false;

//     }, function(errorMessage) {
//       renderStatus('Cannot display image. ' + errorMessage);
//     });
//   });
// });
