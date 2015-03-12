/*global chrome, alert, console, $*/
chrome.tabs.onActivated.addListener(function (activeInfo) {
    "use strict";
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            request: "backup"
        }, function (response) {
            console.log("Performed clipboard backup.");
        });
    });
});