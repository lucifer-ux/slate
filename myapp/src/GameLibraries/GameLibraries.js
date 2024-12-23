import React from "react";
import "./GameLibraries.css";
import Card from "../Components/Cards/Card";
import epicGamesLogo from "../assets/Epic_Games_logo.svg.png";
import steamLogo from "../assets/steamLogo.jpeg"

const GameLibraries = () => {
  const libraryUrls = {
    epicGames : "https://store.epicgames.com/en-US/"
    , steamGames: "https://store.steampowered.com/"
  }

  return (
    <>
    
      <div className="cardWrapper">
     
        <Card
          gameLibraryName={"Epic Games"}
          gameLibraryImage={epicGamesLogo}
          url={libraryUrls.epicGames}
        />
        <Card
          gameLibraryName={"Steam"}
          gameLibraryImage={steamLogo}
          url={libraryUrls.steamGames}
        />

      </div>
    </>
  );
};

export default GameLibraries;
