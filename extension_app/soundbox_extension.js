var popup_box = React.createClass({
  displayName: "popup_box",

  render: function () {
    return React.createElement(
      "div",
      { className: "soundBox" },
      "Hello, world! I am a SoundBox."
    );
  }
});
ReactDOM.render(React.createElement("popup_box", null), document.getElementById('soundbox_app'));

// $().ready(function() {
//   var custom_icon = chrome.extension.getURL("box.png");
//   var $soundBoxButton = $('<button class="icon-button"><img class="sc-button-small sc-button-responsive" title="Add to Soundbox" src="' + custom_icon + '" /></button>');
//
//   var $customIconImage = $('<img class="icon" title="Add to Soundbox" src="' + custom_icon + '" />');
//     $('.soundActions.sc-button-toolbar.soundActions__small').append($soundBoxButton).on('click', function() {
//       alert('test!')
//     })
// });
