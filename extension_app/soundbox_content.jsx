var popup_box = React.createClass({
  render: function() {
    return (
      <div className="soundBox">
        Hello, world! I am a SoundBox.
      </div>
    );
  }
});
ReactDOM.render(
  <popup_box />,
  document.getElementById('soundbox_app')
);


// $().ready(function() {
//   var custom_icon = chrome.extension.getURL("box.png");
//   var $soundBoxButton = $('<button class="icon-button"><img class="sc-button-small sc-button-responsive" title="Add to Soundbox" src="' + custom_icon + '" /></button>');
//
//   var $customIconImage = $('<img class="icon" title="Add to Soundbox" src="' + custom_icon + '" />');
//     $('.soundActions.sc-button-toolbar.soundActions__small').append($soundBoxButton).on('click', function() {
//       alert('test!')
//     })
// });
