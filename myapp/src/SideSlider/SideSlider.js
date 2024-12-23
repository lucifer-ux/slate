import React, { useState } from "react";
import "./SideSlider.css"; // Add your styles here

const SideSlider = ({ setActiveComponent }) => {
  const [activeEleemnt, setactiveEleemnt] = useState("Stores");
  const handleClick = (val) => {
    setactiveEleemnt(val);
    setActiveComponent(val);
    closeEpicGamesWebView();
  };
  const closeEpicGamesWebView = () => {
    window.electron.closeWebview();
  }

  return (
    <div className="sidebar">
      {/* Top Section */}
      <div className="menu">
        <div
          className={
            activeEleemnt === "Home" ? "menu-item active" : "menu-item"
          }
          onClick={() => handleClick("Home")}
        >
          <span className="icon">🏠</span>{" "}
          {/* Replace with an actual game controller icon */}
          <span className="text" >
            Home
          </span>
        </div>
        <div
          className={
            activeEleemnt === "Library" ? "menu-item active" : "menu-item"
          }
          onClick={() => handleClick("Library")}
        >
          <span className="icon">📚</span> {/* Replace with a library icon */}
          <span className="text">
            Libraries
          </span>
        </div>
        <div
          className={
            activeEleemnt === "Entertainment" ? "menu-item active" : "menu-item"
          }
          onClick={() => handleClick("Entertainment")}
        >
          <span className="icon">💻</span>{" "}
          {/* Replace with a community/chat icon */}
          <span className="text">
            Entertainment
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="menu bottom-menu">
        <div
          className={
            activeEleemnt === "Settings" ? "menu-item active" : "menu-item"
          }
        >
          <span className="icon">⚙️</span> {/* Replace with a settings icon */}
          <span className="text" onClick={() => handleClick("Settings")}>
            Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideSlider;
