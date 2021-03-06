// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(function(){

  $('.play').on('click', function(event){
    event.preventDefault();
    var widget = SC.Widget('player');
    widget.load(this.id, {
      auto_play: true
    });
    $('#player-footer').addClass("visible");
    widget.bind(SC.Widget.Events.FINISH, function() {
      // play the next song
    });
  });

  $('.play_all').on('click', function(event){
    event.preventDefault();
    var widget = SC.Widget('player');
    var song_index = 1;
    var that = this.id.split('"');
    widget.load(that[song_index], {
      auto_play: true
    });
    $('#player-footer').addClass("visible");
    widget.bind(SC.Widget.Events.FINISH, function() {
      song_index += 2;
      widget.load(that[song_index], {
        auto_play: true
      });
    });
  });

});
