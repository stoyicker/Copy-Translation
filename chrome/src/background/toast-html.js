/*global $, chrome*/
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    "use strict";
    if (request.cmd === "append_toast") {
        $.ajax({
            url: chrome.extension.getURL("templates/toast.html"),
            dataType: "html",
            success: sendResponse
        });
    }
});