import {React, useState, useEffect} from "react";
import "./GameCard.css"
import ChessImage from "../assets/AppIcon.png"

const GameCard = (imageName) => {

    const [clicked, setClicked] = useState(false)
    const [iconDataUrl, setIconDataUrl] = useState(null);

    useEffect(() => {
        handleGetFileIcon();
      }, []);

    const handleClick = () => {
        setClicked(!clicked)
    }

  const handleGetFileIcon = async () => {
    try {
      const filePath = "/path/to/your/file"; // Replace with the actual file path
      const dataUrl = await window.electron.getFileIcon(filePath);
      setIconDataUrl(dataUrl);
    } catch (error) {
      console.error("Error retrieving file icon:", error);
    }
  };
  
  return (
    <>      
  <div className="card" onMouseEnter={handleClick} onMouseLeave={handleClick}>
    <div className="wrapper">
      <img src={"https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"} className="cover-image" />
    </div>
    <h1 className="title"> {clicked ? "Play" : "Game Name"} </h1>
    <img src={ChessImage} className="character" />
  </div>

    </>
  );
};

export default GameCard;
