/*global $, chrome, alert*/
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        "use strict";
        if (message.request === "retrieve_url") {
            sendResponse(chrome.extension.getURL(message.fileName));
        } else if (message.request === "insert_css") {
            chrome.tabs.insertCSS(null, {
                file: message.fileName
            });
        }
    }
);