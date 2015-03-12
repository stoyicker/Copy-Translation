/*global chrome, console*/

chrome.tabs.insertCSS({
    file: "css/toast.css"
}, function () {
    "use strict";
    console.log("Toast CSS injected.");
});