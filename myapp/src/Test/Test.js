import React, { useState } from "react";

function Test() {
  const [gameName, setGameName] = useState("");
  const [games, setGames] = useState([]);

  const handleSearch = async () => {
    if (!gameName.trim()) return; // Prevent empty searches
    try {
      const data = await window.electron.fetchGameData(gameName);
      setGames(data); // Set the games data in state
    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Game Finder</h1>
      <input
        type="text"
        placeholder="Enter game name"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key press
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {games.map((game) => (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img
              src={game.background_image}
              alt={game.name}
              style={{ width: "300px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
