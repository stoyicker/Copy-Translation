/*global $*/

var srcBox = document.getElementById("source"),
    resultBox = document.getElementById("result_box"),
    oldClipboardText;

function copyTextToClipboard(text) {
    "use strict";
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

resultBox.addEventListener("DOMNodeInserted", function () {
    "use strict";
    oldClipboardText = document.execCommand('cut');
    copyTextToClipboard(resultBox.innerText);
    srcBox.focus();
}, false);