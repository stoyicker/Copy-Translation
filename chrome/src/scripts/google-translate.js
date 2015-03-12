/*global $, chrome, alert, console, readClipboard, copyTextToClipboard*/

var srcBox = document.getElementById("source"),
    resultBox = document.getElementById("result_box"),
    oldClipboardText;

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        "use strict";
        if (message.request === "backup") {
            console.log("Received a backup request");
            oldClipboardText = readClipboard();
            console.log("Clipboard contents stored: " + oldClipboardText);
        }
    }
);

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        "use strict";
        if (message.request === "file_retrieved") {
            alert("File contents: " + message.data);
        }
    }
);

resultBox.addEventListener("DOMNodeInserted", function () {
    "use strict";
    copyTextToClipboard(resultBox.innerText);
    srcBox.focus();
}, false);

chrome.runtime.sendMessage({
    request: "retrieve_file",
    fileName: "templates/toast.html"
});
