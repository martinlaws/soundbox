chrome.runtime.onInstalled.addListener(function() {
// Replace all rules ...
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  // With a new rule ...
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.soundcloud.com', schemes: ['https'] },
        })
      ],
      // And shows the extension's page action.
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }
  ]);
});
});

chrome.tabs.onUpdated.addListener(function(id, info, tab){
  chrome.pageAction.show(tab.id);
  chrome.tabs.executeScript(null, {"file": "soundbutton.js"});
});