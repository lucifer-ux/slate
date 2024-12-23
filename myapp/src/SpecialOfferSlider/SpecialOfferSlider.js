import React, { useState } from "react";
import "./SpecialOffersSlider.css";

const SpecialOffersSlider = ({searchImage}) => {
  const games = [
    {
      title: "Hogwarts Legacy",
      image: "https://via.placeholder.com/200x300", // Replace with actual image
    },
    {
      title: "Call of Duty: Infinite Warfare",
      image: "https://via.placeholder.com/200x300", // Replace with actual image
    },
    {
      title: "FIFA 23",
      image: "https://via.placeholder.com/200x300", // Replace with actual image
    },
    {
      title: "Mass Effect: Andromeda",
      image: "https://via.placeholder.com/200x300", // Replace with actual image
    },
    {
        title: "Call of Duty: Infinite Warfare",
        image: "https://via.placeholder.com/200x300", // Replace with actual image
      },
      {
        title: "FIFA 23",
        image: "https://via.placeholder.com/200x300", // Replace with actual image
      },
      {
        title: "Mass Effect: Andromeda",
        image: "https://via.placeholder.com/200x300", // Replace with actual image
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;

  const nextSlide = () => {
    if (currentIndex + visibleCards < games.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="special-offers-slider">
      <div className="header">
        <h2>Special offers</h2>
        <button className="learn-more">Learn more</button>
      </div>
      <div className="slider">
        <button className="prev-button" onClick={prevSlide}>
          ◀
        </button>
        <div className="cards-container">
          {games.slice(currentIndex, currentIndex + visibleCards).map((game, index) => (
            <div className="game-card" key={index}>
              <img src={game.image} alt={game.title} className="game-image" />
              <h3 className="game-title">{game.title}</h3>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default SpecialOffersSlider;
