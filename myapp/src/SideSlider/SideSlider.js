import React, { useState, useEffect } from "react";
import "./SideSlider.css";

const SideSlider = ({ setActiveComponent }) => {
  const [activeEleemnt, setactiveEleemnt] = useState("Home");

  useEffect(() => {
    const interval = setInterval(() => {
      pollGamepad();
    }, 1000);

    return () => clearInterval(interval);
  }, [activeEleemnt]);

  const pollGamepad = () => {
    const gamepads = navigator.getGamepads();
    if (!gamepads) return;

    const gamepad = gamepads[0];
    if (gamepad) {
      const [xAxis, yAxis] = gamepad.axes;
      const buttons = gamepad.buttons;

      if (yAxis > 0.5){
        handleProgressiveNavigation("down");
        console.log("down")
      }

      if (yAxis < -0.5) {
        console.log("up")
        handleProgressiveNavigation("up");
      }
      if (xAxis > 0.5) {
        console.log("right")
        handleProgressiveNavigation("right");
      }
      if(xAxis < -0.5) {
        console.log("left")
        handleProgressiveNavigation("left")
      }
      if (buttons[0].pressed) console.log("Button A pressed");
    }
    else console.log("no gamepad")
  };

  const handleClick = (val) => {
    setactiveEleemnt(val);
    setActiveComponent(val);
    closeEpicGamesWebView();
  };
  const closeEpicGamesWebView = () => {
    window.electron.closeWebview();
  }


  const handleProgressiveNavigation = (direction) => {
    const currentIndex = menuItems.indexOf(activeEleemnt);
    const nextIndex =
      direction === "down"
        ? (currentIndex + 1) % menuItems.length
        : (currentIndex - 1 + menuItems.length) % menuItems.length;
    const nextItem = menuItems[nextIndex];
    setactiveEleemnt(nextItem);
    setActiveComponent(nextItem);
  };

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
