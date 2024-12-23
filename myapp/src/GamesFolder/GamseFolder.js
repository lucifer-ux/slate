import { React, useState, useEffect } from 'react'

const GamseFolder = () => {
    const [progress, setProgress] = useState(0);
    const [downloadComplete, setDownloadComplete] = useState(false);
  
    const handleDownload = () => {
      const downloadUrl = 'https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi';
      const gameName = 'EpicGamesLauncher';
  
      window.electron.downloadGame(downloadUrl, gameName);
  
      window.electron.onDownloadProgress((data) => {
        setProgress(data.progress);
      });
  
      window.electron.onDownloadCompleted(() => {
        setDownloadComplete(true);
      });
  
      window.electron.onDownloadFailed(() => {
        alert('Download failed');
      });
    };
  
    return (
      <div>
        <button onClick={handleDownload}>Download Epic Games Launcher</button>
        <p>Progress: {progress.toFixed(2)}%</p>
        {downloadComplete && <p>Download Complete!</p>}
      </div>
    );
  }
export default GamseFolder