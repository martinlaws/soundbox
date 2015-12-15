chrome.runtime.onInstalled.addListener(function() {
 // Replace all rules ...
 chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
   // With a new rule ...
   chrome.declarativeContent.onPageChanged.addRules([
     {
       conditions: [
         new chrome.declarativeContent.PageStateMatcher({
           pageUrl: { hostEquals: 'soundcloud.com' },
         })
       ],
       // And shows the extension's page action.
       actions: [ new chrome.declarativeContent.ShowPageAction() ]
     }
   ]);
 });
});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if(request.action === 'xhttp') {
      chrome.cookies.get({ "url": 'http://localhost:3000', "name": 'auth_token'}, function(cookie) {
        console.log(cookie)
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

        xhttp.setRequestHeader("AUTHORIZATION", cookie.value);
        xhttp.send(JSON.stringify(request.data.track));
        return true;
      });
    }
});
