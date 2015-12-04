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

  $('#login').on('click', function(event){
    SC.initialize({
      client_id: 'faa62a465cae941ad9b108e2d75e9e7d',
      redirect_uri: 'http://localhost:3000'
    });

    SC.connect().then(function() {
      return SC.get('/me');
    }).then(function(me) {
      alert('Hello, ' + me.username);
    });
  });

  $('#search').on('submit', function(event){
    event.preventDefault();
    var query = { q: $('#query').val() };
    var widget = SC.Widget('player');
    SC.get('/tracks', query).then(function(tracks) {
      $('.tracks-list').html('');
      $.each(tracks, function(index, value){
        $('.tracks-list').append('<li>' + value.title + '</li><button type="button" data-uri="' + value.uri + '">Add</button>');
      });
    });
  });

  $('.tracks-list').on('click', 'button', function(event){
    event.preventDefault();
    var widget = SC.Widget('player');
    widget.load($(this).data('uri'));
  });

});
