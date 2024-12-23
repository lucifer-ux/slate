import { React, useState } from "react";
import "./Card.css";

const Card = ({
  gameLibraryName,
  gameLibraryImage,
  url
  
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const handleOpenEpicGamesWebView = (url) => {
    window.electron.openWebview(url);
  }
  return (
    <>
      <div
        className={`card ${isActive ? "active" : ""}`}
        onClick={toggleActive}
      >
        <div className="card-image" onClick={ () => handleOpenEpicGamesWebView(url) }>
          <img
            src={gameLibraryImage}
            height={120}
            width={120}
            alt="gamelibraryimage"
          />
          <p>
            {gameLibraryName}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
