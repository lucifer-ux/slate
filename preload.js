// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const xinput = require('xinput');

// Expose only the necessary parts of ipcRenderer to the renderer process
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel, data) => {
      const validChannels = ['open-game']; // Define the channels you're allowing
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      }
    },
    on: (channel, func) => {
      const validChannels = ['resource-usage']; // Define the channels you're allowing
      if (validChannels.includes(channel)) {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
  },
  getGamesFolder: () => ipcRenderer.invoke("getGamesFolder"),
  getBatteryInfo: () => ipcRenderer.invoke("get-battery-info"),
  getNetworkStatus: () => ipcRenderer.invoke('get-network-status'),
  downloadGame: (downloadUrl, gameName) => ipcRenderer.invoke('download-game', { downloadUrl, gameName }),
  onDownloadProgress: (callback) => ipcRenderer.on('download-progress', (event, data) => callback(data)),
  onDownloadCompleted: (callback) => ipcRenderer.on('download-completed', (event, data) => callback(data)),
  onDownloadFailed: (callback) => ipcRenderer.on('download-failed', (event, data) => callback(data)),
  fetchGameData: (gameName) => ipcRenderer.invoke("fetch-game-data", gameName),
  openWebview: (url) => ipcRenderer.invoke('open-webview', url),
  closeWebview: () => ipcRenderer.invoke('close-webview'),
  

});


contextBridge.exposeInMainWorld('gamepadAPI', {
  getGamepads: () => navigator.getGamepads(),
  getHIDDevices: async () => await navigator.hid.requestDevice({ filters: [] }),
  getXInputState: () => xinput.getControllerState(0),
});
