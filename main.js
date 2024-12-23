const {
  app,
  BrowserWindow,
  ipcMain,
  BrowserView,
  screen,
} = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");
const si = require("systeminformation");

let mainWindow;
let view;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webviewTag: true,
    },
  });
  // mainWindow.webContents.openDevTools();
  
  mainWindow.loadURL(`file://${path.join(__dirname, 'myapp', 'build', 'index.html')}`);
}

ipcMain.handle("close-webview", async () => {
  if (view) {
    mainWindow.setBrowserView(null);
    // view = null;
  }
});

ipcMain.handle("open-webview", async (event, url) => {
  view = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const { height } = screen.getPrimaryDisplay().workAreaSize;
  const navbarHeight = 60;
  const marginRight = mainWindow.getSize()[0] * 0.18;
  mainWindow.setBrowserView(view);
  view.setBounds({
    x: 200,
    y: navbarHeight,
    width: mainWindow.getSize()[0] - marginRight,
    height: height,
  });
  view.setAutoResize({
    width: true,
    height: true,
  });
  view.webContents.setWindowOpenHandler(() => {
    return { action: "allow" };
  });
  view.webContents.loadURL(url);
});

ipcMain.handle("fetch-game-data", async (event, gameName) => {
  const apiKey = "6066c50bb43e47539509d05a2c9c2cba"; // Replace with your RAWG API Key
  const url = `https://api.rawg.io/api/games/${gameName}?key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Resolve the promise
    console.log(data);
    return data; // Return resolved data
  } catch (error) {
    console.error("Error fetching game data:", error);
    throw new Error("Failed to fetch game data");
  }
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
