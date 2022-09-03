alert(location.href);

addEventListener("DOMContentLoaded", function(_e) {
	const input = document.querySelector("input");
	const webview = document.createElement("webview");
	webview.src = "https://nm-games.eu";
    webview.addEventListener("load-commit", function(e) {
 		input.value = e.url;
	});
    input.addEventListener("keydown", function(e) {
		if (e.key == "Enter") webview.src = input.value;
	});
	document.body.appendChild(webview);
});

