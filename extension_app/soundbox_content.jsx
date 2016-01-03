var ReactDOM = require('react-dom');
var React = require('react');

$().ready(function() {

  var boxIcon = chrome.extension.getURL("box.png");
  var trackData = {};
  
  var SoundBoxButton = React.createClass ({

// handleClick is where the ajax post should go
    handleClick: function() {
      console.log("you clicked a button");
      trackData["url"] = this.props.url;
      trackData["track_info"] = this.props.trackinfo;
      console.log(this.props.url);
      console.log(this.props.trackinfo);
    },

    render: function() {
      return (
        <div className="addButton" onClick={this.handleClick}>

        </div>
      );
    }
  });

  function addComponent(targetDiv) {
    var trackURL = $(targetDiv).prev()[0].href
    var trackInfo = $(targetDiv).prev('.sound__coverArt').find('span.sc-artwork').attr('aria-label');
    ReactDOM.render(<SoundBoxButton trackinfo={trackInfo} url={trackURL} />, targetDiv);
  }

  function addButton() {
    var $targets = $('.sound__artwork').not('.appended');
    // console.log("Expecting multiple targets, got [", $targets.length, "] targets.", $targets);
    $targets.addClass('appended');
    $targets.append('<div class="soundbox-button"></div>');

    var $buttonTargets = $('.soundbox-button');
    $.each($buttonTargets, function(index, ea) {
      addComponent(ea);
    });

  }

  setInterval(addButton, 1000);

});

// how to use an img tag in jsx
// is there an event.target in jsx?
          // <Image
          //   source={{uri: './box.png'}}
          // />
      // chrome.runtime.sendMessage({
      //   method: 'POST',
      //   action: 'xhttp',
      //   url: 'http://soundbox-app.herokuapp.com/api/tracks',
      //   data: {track: trackData}
      // }, function(response) {
      //   $('.notification').slideDown('slow').delay(1500).slideUp('slow');
      //   console.log(response);
      // });

// initial state is a certain icon
// change state when a song is added, set it to be another icon/colour