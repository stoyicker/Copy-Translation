function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

var resultBox = document.getElementById("result_box");

resultBox.addEventListener("DOMNodeInserted", function() {
  copyTextToClipboard(resultBox.innerText);
}, false);