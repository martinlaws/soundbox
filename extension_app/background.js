chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.action == "xhttp") {

        var xhttp = new XMLHttpRequest();
        var method = request.method ? request.method.toUpperCase() : 'GET';

        xhttp.onload = function() {
          console.log('onload callback');
            callback(xhttp.responseText);
        };
        xhttp.onerror = function() {
          console.log('onerror callback');
            // Do whatever you want on error. Don't forget to invoke the
            // callback to clean up the communication port.
            callback();
        };
        xhttp.open(method, request.url, true);
        if (method == 'POST') {
          xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        }

        xhttp.send(JSON.stringify(request.data.track));
        return true; // prevents the callback from being called too early on return
    }
});