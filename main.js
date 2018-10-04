const { app, BrowserWindow } = require('electron')
var path = require('path');
var url = require('url');

let win;

function createWindow () {
	// Create the browser window.
	win = new BrowserWindow({
		width: 1280, 
		height: 800,
		webPreferences: {
			webSecurity: false,
			'unsafe-eval': false
		}
	})


	var my_url = url.format({
		pathname: path.join(__dirname, 'www', 'index.html'),
		protocol: 'file:',
		slashes: true
	});
	
	win.loadURL(my_url);

  	// Event when the window is closed.
	win.on('closed', function () {
		win = null
	})
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
