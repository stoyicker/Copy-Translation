/*global $, chrome, alert, console, readClipboard, copyTextToClipboard*/

var srcBox = document.getElementById("source"),
    resultBox = document.getElementById("result_box"),
    oldClipboardText;

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        "use strict";
        console.log("Received a backup request");
        oldClipboardText = readClipboard();
        console.log("Clipboard contents stored: " + oldClipboardText);
    }
);

resultBox.addEventListener("DOMNodeInserted", function () {
    "use strict";
    copyTextToClipboard(resultBox.innerText);
    srcBox.focus();
}, false);

chrome.extension.sendRequest({
    cmd: "append_toast"
}, function (html) {
    "use strict";
    $('body').html(html);
});