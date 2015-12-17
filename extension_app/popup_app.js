$('#login').on('click', function() {
    var clientID = 'faa62a465cae941ad9b108e2d75e9e7d';
    var redirectURI = 'http://soundbox-app.herokuapp.com/oauth/complete';

    // FIXME Race-condition prone if you open multiple services in parallel
      debugger;

    var authWindow = window.open('http://soundbox-app.herokuapp.com/auth/soundcloud');
});
