/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const { join } = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
  });

  isDev ? win.loadURL('http://localhost:3000') : win.loadFile(join(__dirname, 'dist/index.html'));

  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
