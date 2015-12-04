var TomatoHolder = require('./client/app.jsx');
var ajaxCalls = [];

$(function() {

  function cardDetailsIsOpen() {
    return document.URL.indexOf("trello.com/c/") >= 0
  }

  var loadCode = function() {
    var cardPattern = /^https:\/\/trello.com\/c\/(\S+)\/(\S+)$/;
    var userNamePattern = /^\(\S*\)/;
    
    TomatoHolder.renderInCard()
  }

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if(cardDetailsIsOpen() && $(".js-pomodoro-harvest-holder").length == 0) {
      ajaxCalls.forEach(function(ajaxCall) {
        ajaxCall.abort();
      });
        
      loadCode();
    }

  });

  function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
  }

  injectScript( chrome.extension.getURL('/build/js/page_functions.js'), 'body');
});
