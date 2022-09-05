const { BrowserWindow, app } = require("electron");
const { join } = require("path");

let mainWindow;

app.on("ready", function() {
    mainWindow = new BrowserWindow({
	    width: 800,
	    height: 600,
	    show: false,
    	    webPreferences: {
		preload: join(__dirname, "src/preload.js"),
		webviewTag: true,
		sandbox: false,
		contextIsolation: false
	    }
    });
    mainWindow.setBackgroundColor("#000032");
    mainWindow.title = "Official N&M Games Browser";
    mainWindow.maximize();
    // mainWindow.removeMenu();
    mainWindow.setIcon("static/icon.png");
    mainWindow.loadFile("src/index.html");
    mainWindow.once("ready-to-show", function() {
        mainWindow.show();
    });
    
});
