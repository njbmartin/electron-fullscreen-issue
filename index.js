const { app, BrowserWindow } = require('electron');

let fullscreen = true;

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600});
    win.on('closed', () => {
      win = null
    });
    win.loadURL('https://github.com')
    win.setContentProtection(true);
});