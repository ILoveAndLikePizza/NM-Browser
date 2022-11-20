const { ipcRenderer } = require("electron");

let tabs = [{webview: null, pinned: false, muted: false}];

const createTab = (url) => {
	const input = document.querySelector("input");
	const webview = document.createElement("webview");
	webview.src = url;
    webview.addEventListener("load-commit", function(e) {
 		input.value = e.url;
	});
    input.addEventListener("keydown", function(e) {
		if (e.key == "Enter") webview.src = input.value;
	});
};

addEventListener("DOMContentLoaded", function(_e) {
	const input = document.querySelector("input");
	window.addEventListener("keydown", function(e) {
		if (e.key.toLowerCase() == "e") {
			ipcRenderer.send("toggleDevTools");
		}
	});
	ipcRenderer.on("newTab", function() {
		tabs.push({url: "nm://newtab", pinned: false, muted: false});
	});
	document.body.appendChild(webview);
});

