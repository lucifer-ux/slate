import React from 'react';
import "./HeroSection.css"

const HeroSection = () => {
  const openCalculator = () => {
    window.electronAPI.openCalculator(); // Use the secure API from the preload script
  };
  const openChess = () => {
    window.electronAPI.openChess();
  }
 const openGta = () => {
  window.electronAPI.openGta();
 }
 const openSteam = () => {
  window.electronAPI.openSteam();
 }

  return (
    <>
    <div>

    </div>
    </>
  );
};

export default HeroSection;
