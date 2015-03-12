/*global $, chrome, alert*/
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        "use strict";
        if (message.request === "retrieve_file") {
            alert("Received file retrieval demand for file " + message.fileName);
            $.get(chrome.extension.getUrl(message.fileName), function (data) {
                alert("Load was performed: " + data);
            });
        }
    }
);