$('#login').on('click', function() {
    var clientID = 'faa62a465cae941ad9b108e2d75e9e7d';
    var redirectURI = 'http://localhost:3000/oauth/complete';

    // FIXME Race-condition prone if you open multiple services in parallel
      debugger;

    var authWindow = window.open('localhost:3000/auth/soundcloud');
});
