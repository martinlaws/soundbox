$('#login').on('click', function(event){
  $.ajax({
    url: 'http://localhost:3000/oauth/login'
  }).done(function(data){
    $('#soundbox-app').html(data);
  });
});
