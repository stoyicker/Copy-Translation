/*global $*/

function readClipboard() {
    "use strict";
    var cutFrom = $('<textarea/>'),
        result = '';
    cutFrom.id = "sandbox";
    $('body').append(cutFrom);
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