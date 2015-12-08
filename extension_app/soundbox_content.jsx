var SoundBox = React.createClass({
  render: function() {
    return (
      <div className="soundBox">
        Hello, world! I am a SoundBox.
      </div>
    );
  }
});

var SoundButton = React.createClass({
  render: function() {
    return (
      <button
    );
  }
});

ReactDOM.render(
  <SoundBox />,
  document.getElementById('soundbox-app')
);

//
// ReactDOM.render(
//   <testbox />,
//   document.getElementById('soundbox-app')
// );

// $().ready(function() {
//   var custom_icon = chrome.extension.getURL("box.png");
//   var $soundBoxButton = $('<button class="icon-button"><img class="sc-button-small sc-button-responsive" title="Add to Soundbox" src="' + custom_icon + '" /></button>');
//
//   var $customIconImage = $('<img class="icon" title="Add to Soundbox" src="' + custom_icon + '" />');
//     $('.soundActions.sc-button-toolbar.soundActions__small').append($soundBoxButton).on('click', function() {
//       alert('test!')
//     })
// });
