import {React, useState} from "react";
import "./Navbar.css"; // Add your styles here

const Navbar = ({ setSearchImage }) => {
  const [gameName, setGameName] = useState("");
  const [rawgApiResponse, setRawgApiResponse] = useState({})
  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!gameName.trim()) return; // Prevent empty searches
    try {
      const data = await window.electron.fetchGameData(gameName);
      setRawgApiResponse(data); // Set the games data in state
      setSearchImage(data);
    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  };

  return (
    <div className="navbar">
      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input 
        type="text"
        placeholder="Search orders"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
        onKeyDown={handleEnterClick}
        className="search-input" />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {/* Right Section */}
      <div className="navbar-icons">
        <div className="icon notification">
          <span className="dot"></span>
          🔔
        </div>
        <div className="icon">🗑️</div>
        <div className="profile">
          <img
            src="https://via.placeholder.com/40" // Replace with actual profile image URL
            alt="Profile"
            className="profile-image"
          />
          <span className="profile-name">Jenny Wilson</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
