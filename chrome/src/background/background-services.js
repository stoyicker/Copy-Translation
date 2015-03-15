/*global $, chrome, alert*/
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        "use strict";
        if (message.request === "retrieve_url") {
            sendResponse(chrome.extension.getURL(message.fileName));
        }
    }
);
