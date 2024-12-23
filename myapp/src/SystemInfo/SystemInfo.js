import React, { useState, useEffect } from 'react';

const App = () => {
  const [resourceUsage, setResourceUsage] = useState({
    cpuUsage: 0,
    memoryUsage: 0,
    gpuInfo: null,
  });

  useEffect(() => {
    // Listen for the resource usage updates from the main process
    window.electron.ipcRenderer.on('resource-usage', (data) => {
      setResourceUsage({
        cpuUsage: data.cpuUsage,
        memoryUsage: data.memoryUsage,
        gpuInfo: data.gpuInfo,
      });
    });
  }, []);

  // Function to send a request to open a game (or any application)
  const openGame = (gameName) => {
    window.electron.ipcRenderer.send('open-game', gameName);
  };

  return (
    <div>
      <h1>Game Resource Monitor</h1>
      <h2>CPU Usage: {resourceUsage.cpuUsage}%</h2>
      <h2>Memory Usage: {resourceUsage.memoryUsage} MB</h2>
      {resourceUsage.gpuInfo && (
        <div>
          <h2>GPU Info:</h2>
          <p>Model: {resourceUsage.gpuInfo.controllers[0].model}</p>
          <p>Usage: {resourceUsage.gpuInfo.controllers[0].memoryUsed} MB</p>
        </div>
      )}
      <button className='gaming-button' onClick={() => openGame('chess')}>Chess</button>
      <button className='gaming-button' onClick={() => openGame('gta')}>GTA</button>
      <button className='gaming-button' onClick={() => openGame('sinper')}>Snipper Ops</button>
      <button className='gaming-button' onClick={() => openGame("Steam Link")}>Steam Link</button>
    </div>
  );
};

export default App;
