(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./client/app.jsx":2}],2:[function(require,module,exports){
var TomatoButton = require('./button.jsx');

module.exports = {
  renderInCard: function() {
    $(".other-actions").find(".u-clearfix").append("<div class='js-pomodoro-harvest-holder'></div>")
    React.render(React.createElement(TomatoButton, null), $('.js-pomodoro-harvest-holder')[0]);
  }  
}

},{"./button.jsx":3}],3:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",

  getInitialState: function() {
    return {
      timerRunning: false,
      timerStartTime: null,
      elapsed: 0,
      totalTime: 60 * 25 // 25 minutes
    }
  },

  startTimer: function() {
    this.setState({
      timerRunning: true,
      timerStartTime: Date.now()
    });

    this.timerInterval = setInterval(this.tick, 1000)

    var $harvestButton = $('.harvest-timer')
    var groupId = $harvestButton.data().group.id
    var itemId = $harvestButton.data().item.id

    //window.postMessage({name: "tomato:startTimer", groupId: groupId, itemId: itemId}, "*");
    $('.harvest-timer')[0].click()

  },

  stopTimer: function() {
    this.setState({
      timerRunning: false
    });

    clearInterval(this.timerInterval);

    var $harvestButton = $('.harvest-timer')
    var groupId = $harvestButton.data().group.id
    var itemId = $harvestButton.data().item.id

    $('.harvest-timer')[0].click()
    
    //window.postMessage({name: "tomato:stopTimer", groupId: groupId, itemId: itemId}, "*");

  },

  tick: function() {
    if(this.timeLeft < 1) {
      this.stopTimer();
    }
    else
      this.setState({
        elapsed: new Date() - this.state.timerStartTime
      });
  },

  render: function() {
    var elapsed = Math.round(this.state.elapsed / 1000)
    this.timeLeft = this.state.totalTime - elapsed;

    var minutes = parseInt(this.timeLeft / 60, 10);
    var seconds = parseInt(this.timeLeft % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var displayText = minutes + ":" + seconds;

    if( this.state.timerRunning )
      return (
        React.createElement("a", {className: "button-link", style: {background: 'red', color: 'white'}, onClick: this.stopTimer}, 
          React.createElement("img", {src:  chrome.extension.getURL('build/images/tomato_icon.png') }), " Stop (", displayText, ")"
        )
      )
    else
      return (
        React.createElement("a", {className: "button-link", onClick: this.startTimer}, 
          React.createElement("img", {src:  chrome.extension.getURL('build/images/tomato_icon.png') }), " Start Timer"
        )
      )
  } 
  
});

},{}]},{},[1]);
