/*global $, chrome, alert, console*/

var srcBox = document.getElementById("source"),
    resultBox = document.getElementById("result_box"),
    toInject = chrome.extension.getURL("templates/toast.html"),
    toast = document.createElement("div"),
    oldClipboardText;

toast.innerHTML = "hola";

function readClipboard() {
    "use strict";
    var cutFrom = $('<textarea/>');
    cutFrom.id = "sandbox";
    $('body').append(cutFrom);
    var result = '';
    cutFrom.val('').select();
    if (document.execCommand('paste')) {
        result = cutFrom.val();
    }
    cutFrom.val('');
    cutFrom.remove();
    return result;
}

function copyTextToClipboard(text) {
    "use strict";
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        "use strict";
        console.log("Received a backup request");
        oldClipboardText = readClipboard();
        console.log("Clipboard contents stored: " + oldClipboardText);
    }
);

document.body.appendChild(toast);
resultBox.addEventListener("DOMNodeInserted", function () {
    "use strict";
    copyTextToClipboard(resultBox.innerText);
    srcBox.focus();
}, false);

alert(toInject);