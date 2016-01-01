var ReactDOM = require('react-dom');
var React = require('react');

$().ready(function() {

  var SoundBoxButton = React.createClass ({
    render: function() {
      return (
        <div className="addButton">I am a SoundBox!</div>
      )
    }
  });

  function addComponent(targetDiv) {
    ReactDOM.render(<SoundBoxButton />, targetDiv);
  }

  function addButton() {
    var targets = $('.sound__artwork').not('.appended');
    console.log( "Expecting multiple targets, got [", targets.length, "] targets.", targets );
    targets.addClass('appended');

    $.each($(targets), function(index, ea) {
      addComponent(ea);
    })

  }

  setInterval(addButton, 1000);

});
