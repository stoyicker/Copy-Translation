/*global $, chrome, alert, console, readClipboard, copyTextToClipboard*/

var srcBox = document.getElementById("source"),
    resultBox = document.getElementById("result_box"),
    oldClipboardText,
    toastShowing = false;

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        "use strict";
        if (message.request === "backup_clipboard") {
            oldClipboardText = readClipboard();
        }
    }
);

function showToast() {
    "use strict";
    if (!toastShowing) {
        toastShowing = true;
        $('.toast').stop().fadeIn(400).delay(3000).fadeOut(400, function () {
            toastShowing = false;
        });
    }
}

resultBox.addEventListener("DOMNodeInserted", function () {
    "use strict";
    copyTextToClipboard(resultBox.innerText);
    srcBox.focus();
    showToast();
}, false);

function onUndoRequested() {
    "use strict";
    copyTextToClipboard(oldClipboardText);
    $('.toast').stop().clearQueue().fadeOut(400);
}

chrome.runtime.sendMessage({
    request: "retrieve_url",
    fileName: "templates/toast.html"
}, function (url) {
    "use strict";
    $.ajax({
        url: url,
        dataType: "html",
        success: function (contents) {
            $("body").append(contents);
            document.getElementById("undobutton").addEventListener('click', onUndoRequested);
        }
    });
});
